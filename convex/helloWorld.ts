import { query } from "./_generated/server";

export const getHelloWorld = query({
  handler: async () => {
    return "Hello from Convex!";
  },
});