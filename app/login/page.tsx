import auth from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Login () {
    const user = await auth.getUser();
    if (user) redirect("/dashboard");
    return (
        <div>
            <form action={auth.createSession} id="login-form">
                <h3>Login</h3>
                <p>Enter your information to create an account</p>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email..."
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password..."
                    />
                </div>
                <div>
                    <input type="submit" value={"Login"} />
                </div>
            </form>
        </div>
    );
}
