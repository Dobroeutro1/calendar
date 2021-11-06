import { Event, IProps } from '../../interfaces'

export interface SidebarStorage {
  eventList: Event[]
}

export interface SidebarProps extends IProps {
  eventList: Event[]
}

export interface SidebarState {
  value: string
  eventList: Event[]
}
