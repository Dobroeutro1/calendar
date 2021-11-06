import { Day, IProps } from '../../interfaces'

export interface CalendarStorage {
  currentDate: string
  days: Day[]
}

export interface CalendarProps extends IProps {
  currentDate: string
  days: Day[]
}
