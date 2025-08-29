import { query } from "./_generated/server";

export const getTest = query({ 
    handler: async () => {
        return "Hello from Convex!";
    },
});
