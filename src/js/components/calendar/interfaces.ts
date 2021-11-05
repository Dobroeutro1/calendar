import { IProps } from '../../interfaces'

export interface CalendarStorage {
  currentDate: string
}

export interface CalendarProps extends IProps {
  currentDate: string
}
