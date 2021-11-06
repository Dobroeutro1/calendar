import React from 'react'

export interface SidebarEventModalProps {
  show: boolean
  event: string
  handleShowEventPopup: () => void
  onChangeEvent: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClearState: () => void
  onSubmitEvent: (event: React.FormEvent<HTMLFormElement>) => void
}