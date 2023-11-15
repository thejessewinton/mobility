import { createTRPCRouter } from '~/server/api/trpc'
import { liftsRouter } from './lifts'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  lifts: liftsRouter
})

// export type definition of API
export type AppRouter = typeof appRouter
