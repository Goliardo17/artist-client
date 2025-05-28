import { createCallerFactory, createTRPCRouter } from "./trpc";
import { canvasRouter } from "./routers/canvas"

export const appRouter = createTRPCRouter({
  canvas: canvasRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
