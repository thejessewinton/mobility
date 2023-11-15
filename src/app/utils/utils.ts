import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const classNames = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const convertLbsToKgs = (value: number) => {
  return value / 2.2
}

export const convertKgsToLbs = (value: number) => {
  return value * 2.2
}
