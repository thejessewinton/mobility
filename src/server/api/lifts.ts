import { z } from 'zod'
import { createTRPCRouter, protectedProcedure } from './trpc'
import { insertLiftSchema, lifts, selectUnitSchema, units } from '../db/schema'
import { eq } from 'drizzle-orm'

export const liftsRouter = createTRPCRouter({
  getAllLifts: protectedProcedure.query(async ({ ctx }) => await ctx.db.query.lifts.findMany()),
  getUniqueLift: protectedProcedure.input(z.object({ id: z.string() })).query(
    async ({ input, ctx }) =>
      await ctx.db.query.lifts.findFirst({
        where: (lifts, { eq }) => eq(lifts.id, Number(input.id))
      })
  ),
  createLift: protectedProcedure
    .input(insertLiftSchema)
    .mutation(async ({ input, ctx }) => await ctx.db.insert(lifts).values({ ...input, userId: ctx.session.user.id })),
  updateUnit: protectedProcedure.input(selectUnitSchema.pick({ value: true })).mutation(
    async ({ input, ctx }) =>
      await ctx.db
        .update(units)
        .set({
          value: input.value
        })
        .where(eq(units.userId, ctx.session.user.id))
  )
})
