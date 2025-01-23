
type Session = {
    value: string;
}

import { Client, Databases, Account } from "node-appwrite";

const createAdminClient = async () => {
    const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('677656b80035e7cb5794')
        .setKey('standard_79be654f9a4db1be04b6cd44052f15bfb3c7f2c7e77311f72fb48399f06d30da0d3c5558861c7961e690a557e3cb07ff4bb8cd204ae3dc82eb300f38bc5f77de0663c061ccaa4416ce92cd9647a5d88900ebafd125b1bc10191f68472071c666f63c47b811bb30dc5b9e595d71ef0ade6a45afa809e756bd8e3c09c3b4fedd43');

    return {
        get account() {
            return new Account(client);
        },

        get databases() {
            return new Databases(client);
        },
    };
};

const createSessionClient = async (session) => {
    const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('677656b80035e7cb5794');
      

    if (session) {
        client.setSession(session);
    }

    return {
        get account() {
            return new Account(client);
        },

        get databases() {
            return new Databases(client);
        },
    };
};

export { createAdminClient, createSessionClient };
