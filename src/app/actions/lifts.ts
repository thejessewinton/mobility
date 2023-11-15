'use server'

import { redirect } from 'next/navigation'
import { zfd } from 'zod-form-data'
import { getServerAuthSession } from '~/server/auth'
import { db } from '~/server/db'
import { insertLiftSchema, lifts } from '~/server/db/schema'

export const addLift = async (formData: FormData) => {
  const session = await getServerAuthSession()

  if (!session) return

  const data = await zfd.formData(insertLiftSchema).parseAsync(formData)

  await db.insert(lifts).values({ ...data, userId: session.user.id })

  redirect('/lifts')
}
