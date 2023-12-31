'use client'

import { ThemeProvider as ThemeProviderPrimitive, useTheme } from 'next-themes'
import { useState, type ReactNode, useEffect, type ChangeEvent } from 'react'

import { Select } from '~/app/_components/shared/select'

type ThemeProviderProps = {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ThemeProviderPrimitive>{children}</ThemeProviderPrimitive>
}

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Select className='inline-flex' name='theme' defaultValue='system'>
        <option value='system'>System</option>
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
      </Select>
    )
  }

  return (
    <Select
      className='inline-flex'
      name='theme'
      onChange={(e: ChangeEvent<HTMLSelectElement>) => {
        setTheme(e.target.value)
      }}
      value={theme ?? 'system'}
    >
      <option value='system'>System</option>
      <option value='light'>Light</option>
      <option value='dark'>Dark</option>
    </Select>
  )
}
