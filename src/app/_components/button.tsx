import { type ComponentPropsWithRef, type ReactNode } from 'react'

import Link, { type LinkProps } from 'next/link'

import { classNames } from '~/app/utils/core'

type BaseProps =
  | ({ href?: never; icon?: ReactNode; disabled?: boolean } & ComponentPropsWithRef<'button'>)
  | ({ href: string; icon?: ReactNode; disabled?: boolean } & ComponentPropsWithRef<'a'> & LinkProps)

type ButtonProps = BaseProps

export const Button = ({ children, icon, className, disabled, ...props }: ButtonProps) => {
  if (props.href === undefined) {
    return (
      <button className={classNames(className)} disabled={disabled} {...props}>
        {children}
        {icon ? icon : null}
      </button>
    )
  }

  return (
    <Link className={classNames(className)} {...props}>
      {children}
      {icon ? icon : null}
    </Link>
  )
}
