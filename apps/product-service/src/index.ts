import express, { type Request, type Response } from "express";
import cors from "cors";
import { clerkMiddleware, getAuth } from "@clerk/express";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);

app.use(clerkMiddleware());

app.get("/health", (req: Request, res: Response) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});

app.get("/test", (req: Request, res: Response) => {
  const auth = getAuth(req);
  const userId = auth.userId;
  if (!userId) {
    res.status(401).json({ message: "you are not logged in for product service" });
  }
  res.status(500).json({ message: "prdouct service authenticated" });
});

app.listen(process.env.PORT, () => {
  console.log(`product-service is running on ${process.env.PORT}`);
});
