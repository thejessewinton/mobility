import { weightUnits } from '~/server/db/schema'
import { Select, type SelectProps } from './select'

export const UnitSwitcher = ({ defaultValue = 'lbs', name = 'unit', ...props }: SelectProps) => {
  return (
    <Select defaultValue={defaultValue} name={name} {...props}>
      {weightUnits.map((unit) => (
        <option key={unit} value={unit}>
          {unit}
        </option>
      ))}
    </Select>
  )
}
