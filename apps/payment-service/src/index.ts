import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

// Apply Clerk middleware
app.use("*", clerkMiddleware());
app.use("*", cors());

// Health check endpoint
app.get("/health", (c) => {
  return c.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});

// Protected root route
app.get("/test", (c) => {
  const auth = getAuth(c);

  if (!auth?.userId) {
    return c.json({
      message: "You are not logged in for payment service",
    });
  }

  return c.json({
    message: "You are logged in ",
  });
});

// Start server
const start = async () => {
  try {
    serve(
      {
        fetch: app.fetch,
        port: 8002,
      },
      () => {
        console.log(`payment-service is running on ${process.env.PORT}`);
      }
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
