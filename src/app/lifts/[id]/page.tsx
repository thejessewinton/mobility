import { api } from '~/trpc/server'

type WorkoutPageParams = {
  params: {
    id: string
  }
}

export default async function WorkoutPage({ params }: WorkoutPageParams) {
  const data = await api.lifts.getUniqueLift.query({ id: params.id })

  return (
    <div>
      {data?.name} - {data?.unit}
    </div>
  )
}
