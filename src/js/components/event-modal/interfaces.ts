import { Event } from '../../interfaces'
import React from 'react'

export interface EventModalProps {
  edit: boolean
  event: Event
  show: boolean

  handleShowEvent: () => void
  addEvent: (event: React.FormEvent<HTMLFormElement>) => void
  deleteEvent: () => void
  changeEvent: (event: React.FormEvent<HTMLFormElement>) => void
  onChangeEvent: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}