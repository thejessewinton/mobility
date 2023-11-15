'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Cross1Icon } from '@radix-ui/react-icons'

type DialogProps = {
  description?: string
  trigger?: React.ReactNode
} & DialogPrimitive.DialogProps

export const Dialog = ({ open, onOpenChange, trigger, children }: DialogProps) => {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className='motion-safe:animate-fade-in fixed inset-0 z-auto bg-white bg-opacity-60 backdrop-blur transition-all dark:bg-black' />
        <DialogPrimitive.Content className='motion-safe:animate-fade-in fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border bg-neutral-100 p-6 dark:border-neutral-700 dark:bg-neutral-900 lg:min-w-[600px]'>
          <div className='flex flex-col gap-3'>
            <header className='flex items-center justify-end'>
              <DialogPrimitive.Close className='flex cursor-pointer items-center justify-center rounded-full p-3 transition-colors hover:bg-neutral-200 hover:dark:bg-neutral-800'>
                <Cross1Icon className='text-neutral-900 dark:text-white' />
              </DialogPrimitive.Close>
            </header>

            {children}
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
