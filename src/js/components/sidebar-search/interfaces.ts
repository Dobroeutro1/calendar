import { Event, IProps } from '../../interfaces'
import React from 'react'

export interface SidebarSearchProps extends IProps {
  value: string
  eventList: Event[]
  onClearValue: () => void
  onSetValue: (event: React.ChangeEvent<HTMLInputElement>) => void
}