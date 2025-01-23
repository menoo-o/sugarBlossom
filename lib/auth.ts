import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createAdminClient, createSessionClient} from '@/appwrite/authconfig'

interface AuthUser {
  $id: string;
  email: string;
  name?: string;
  [key: string]: any; // Include additional fields the user object may have
}

interface Auth {
  user: AuthUser | null;
  sessionCookie: { name: string; value: string } | null;
  getUser: () => Promise<AuthUser | null>;
  createSession: (formData: FormData) => Promise<void>;
  deleteSession: () => Promise<void>;
}

const auth: Auth = {
  user: null,
  sessionCookie: null,


getUser: async () => {
    const cookieStore = await cookies(); // Wait for the cookies object
    const sessionCookie = cookieStore.get("session"); // Retrieve the "session" cookie

    if (!sessionCookie) {
        // If there's no session cookie, set user to null and return null
        auth.user = null;
        return null;
    }

    try {
        // Use the session cookie's value to validate and fetch user details
        const { account } = await createSessionClient(sessionCookie.value);
        auth.user = await account.get(); // Fetch and set the user details
        return auth.user;
    } catch (error) {
        // Handle errors, e.g., invalid or expired session
        console.error("Error fetching user:", error);
        auth.user = null;
        return null;
    }
},

  createSession: async (formData: FormData) => {
    "use server";

    try {
      const data = Object.fromEntries(formData) as { email: string; password: string };
      const { email, password } = data;

      const { account } = await createAdminClient();
      const session = await account.createEmailPasswordSession(email, password);

      const sessionCookie = await cookies();

      sessionCookie.set("session", session.secret, {
        httpOnly: true,
        sameSite: "lax",
        secure: true,
        expires: new Date(session.expire),
        path: "/",
      });

      redirect("/dashboard");
      
    } catch (error) {
      console.error("Error creating session:", error);
    }
  },

  deleteSession: async () => {
    "use server";
    const cookieStore = await cookies(); // Wait for the cookies object
    const sessionCookie = cookieStore.get("session"); // Retrieve the "session" cookie

    if (!sessionCookie) {
        // If there's no session cookie, set user to null and return null
        redirect("/login");
        return;
    }
   

    try {
      const { account } = await createSessionClient(sessionCookie.value);
      await account.deleteSession("current");
    } catch (error) {
      console.error("Error deleting session:", error);
    }

    const sessionCookies = await cookies();
    sessionCookies.delete("session");
    auth.user = null;
    auth.sessionCookie = null;

    redirect("/login");
  },
};

export default auth;
