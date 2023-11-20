import { type ComponentPropsWithRef } from 'react'
import { classNames } from '~/app/utils/core'

export type SelectProps = ComponentPropsWithRef<'select'>

export const Select = ({ children, className, ...props }: SelectProps) => {
  return (
    <select {...props} className={classNames(className)}>
      {children}
    </select>
  )
}
