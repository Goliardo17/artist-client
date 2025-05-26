import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

import { canvases } from "@/shared/api/db/schema";
import { eq } from "drizzle-orm";

export const canvasRouter = createTRPCRouter({
  createCanvas: protectedProcedure
    .input(
      z.object({}),
    )
    .mutation(async ({ ctx, input }) => {
      return ""
    })
});
