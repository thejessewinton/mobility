import { unstable_cache } from 'next/cache'

import { api } from '~/trpc/server'

export const getAllLiftsKey = 'all-user-lifts'
export const getAllLifts = unstable_cache(async () => await api.lifts.getAllLifts.query(), [getAllLiftsKey])
