import { create } from 'zustand'

type DialogState = {
  isOpen: boolean
  setIsOpen: () => void
  dialogContent: React.ReactNode
  handleDialog: (content: React.ReactNode) => void
  handleDialogClose: () => void
}

export const useDialogStore = create<DialogState>((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  dialogContent: null,
  handleDialog: (content) => set({ dialogContent: content, isOpen: true }),
  handleDialogClose: () => set({ dialogContent: null, isOpen: false })
}))
