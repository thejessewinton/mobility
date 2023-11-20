'use server'

import { redirect } from 'next/navigation'
import { zfd } from 'zod-form-data'

import { insertUnitSchema } from '~/server/db/schema'
import { api } from '~/trpc/server'

export const updateUnit = async (formData: FormData) => {
  const data = await zfd.formData(insertUnitSchema).parseAsync(formData)

  await api.lifts.updateUnit.mutate({ value: data.value! })

  redirect('/')
}
