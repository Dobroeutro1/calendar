import { Event } from '../../interfaces'

export interface SidebarSuggestionsProps {
  show: boolean
  eventList: Event[]
  goToDateEvent: (date: string) => void
}