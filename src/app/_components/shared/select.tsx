import { type ComponentPropsWithRef } from 'react'
import { classNames } from '~/app/utils/classnames'

type SelectProps = ComponentPropsWithRef<'select'>

export const Select = ({ children, className, ...props }: SelectProps) => {
  return (
    <select {...props} className={classNames(className)}>
      {children}
    </select>
  )
}
