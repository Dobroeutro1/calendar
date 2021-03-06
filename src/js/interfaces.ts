import { Action, Dispatch } from 'redux'
import { SidebarStorage } from './components/sidebar'
import { CalendarStorage } from './components/calendar'

export interface Storage {
  sidebar: SidebarStorage
  calendar: CalendarStorage
}

export interface Day {
  date: string,
  dayOfTheWeek: number,
  event: Event
}

export interface Event {
  date: string
  title: string
  members: string
  description: string
}

export interface IAction {
  type: string
  payload?: unknown
}

export interface IActionAsync {
  (dispatch: Dispatch<IAction>): void
}

export interface DispatchWithFn extends Dispatch<IAction> {
  <A extends Action>(action: IAction | IActionAsync): A
}

export interface IProps {
  dispatch?: DispatchWithFn
}
