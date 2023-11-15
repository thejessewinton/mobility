import { z } from 'zod'
import { db } from '../db'
import { createTRPCRouter, protectedProcedure } from './trpc'

export const liftsRouter = createTRPCRouter({
  getAllLifts: protectedProcedure.query(async () => await db.query.lifts.findMany()),
  getUniqueLift: protectedProcedure.input(z.object({ id: z.string() })).query(
    async ({ input }) =>
      await db.query.lifts.findFirst({
        where: (lifts, { eq }) => eq(lifts.id, Number(input.id))
      })
  )
})
