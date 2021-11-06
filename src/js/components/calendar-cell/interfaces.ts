import { Event, IProps } from '../../interfaces'

export interface CalendarCellProps extends IProps {
  date: string
  dayOfTheWeek: number,
  event: Event
  header: boolean
}

export interface CalendarCellState {
  date: Date
  showEvent: boolean
  event: Event
}