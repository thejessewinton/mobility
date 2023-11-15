import { addLift } from '~/app/actions/lifts'
import { api } from '~/trpc/server'
import { UnitSwitcher } from '../_components/shared/unit-switcher'

export default async function LiftsPage() {
  const data = await api.lifts.getAllLifts.query()

  return (
    <div>
      {data.map((lift) => (
        <div key={lift.id}>
          {lift.name} - {lift.unit}
        </div>
      ))}

      <form action={addLift}>
        <input type='text' name='name' placeholder='Lift Name' />
        <UnitSwitcher />
        <button type='submit'>Add Lift</button>
      </form>
    </div>
  )
}
