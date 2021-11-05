import { Action, Middleware } from 'redux'
import { months } from './components/calendar/constants'

export const actionFn: Middleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action: Action): Action => {
    if (action instanceof Function) {
      return action(dispatch, getState)
    }

    return next(action)
  }

export function getMonthYearToString(date: string): string {
  const parseDate = date.split('-')
  return `${months[parseInt(parseDate[1], 10) - 1]} ${parseDate[0]}`
}

export function getTodayMonthYear(): string {
  const today = new Date()

  return `${today.getFullYear()}-${today.getMonth() + 1}`
}
