'use server'

import { eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { getServerAuthSession } from '~/server/auth'
import { db } from '~/server/db'
import { unit, units } from '~/server/db/schema'

export const updateUnit = async (formData: FormData) => {
  const session = await getServerAuthSession()

  console.log(Object.fromEntries(formData.entries()))

  if (!session) return

  const schema = z.object({
    value: z.enum(unit)
  })

  const data = schema.parse({
    value: formData.get('value')
  })

  console.log(data)

  await db
    .update(units)
    .set({
      value: data.value
    })
    .where(eq(units.userId, session.user.id))

  redirect('/')
}
