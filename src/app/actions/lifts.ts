'use server'

import { redirect } from 'next/navigation'
import { zfd } from 'zod-form-data'
import { insertLiftSchema } from '~/server/db/schema'
import { api } from '~/trpc/server'

export const addLift = async (formData: FormData) => {
  const data = await zfd.formData(insertLiftSchema).parseAsync(formData)

  await api.lifts.createLift.mutate(data)

  redirect('/lifts')
}
