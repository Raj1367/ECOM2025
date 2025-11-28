import { clerkPlugin, getAuth } from "@clerk/fastify";
import Fastify, { type RequestBodyDefault } from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.register(clerkPlugin);

fastify.get("/health", (request, reply) => {
  reply.send({
    status: "ok",
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});

fastify.get("/test", (request, reply) => {
  const { userId } = getAuth(request);
  if (!userId) {
    reply.send({
      message: "you are not logged in for order service",
    });
  }
  reply.send({
    message: "order service authenticated",
  });
});

const start = async () => {
  try {
    await fastify.listen({ port: 8001 });
    console.log(`order-service is running on ${process.env.PORT}`);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
