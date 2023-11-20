import { revalidateTag } from 'next/cache'
import { zfd } from 'zod-form-data'

import { UnitSwitcher } from '~/app/_components/shared/unit-switcher'
import { createLiftSchema } from '~/server/api/lifts'
import { getAllLifts, getAllLiftsKey } from '~/server/models'
import { api } from '~/trpc/server'

export default async function LiftsPage() {
  const data = await getAllLifts()

  const addLift = async (formData: FormData) => {
    'use server'
    const data = await zfd.formData(createLiftSchema).parseAsync(formData)

    await api.lifts.createLift.mutate(data)

    revalidateTag(getAllLiftsKey)
  }

  return (
    <div>
      {data.map((lift) => (
        <div key={lift.id}>
          {lift.name} - {lift.unit}
        </div>
      ))}

      <form action={addLift} className='flex flex-col gap-2'>
        <label htmlFor='name'>Lift Name</label>
        <input type='text' name='name' placeholder='Lift Name' required />
        <label htmlFor='maxRep'>Max Rep</label>
        <input type='number' step={1} name='maxRep' placeholder='115lbs' required />
        <UnitSwitcher />
        <button type='submit'>Add Lift</button>
      </form>
    </div>
  )
}
