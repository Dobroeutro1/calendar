import { Action, Middleware } from 'redux'
import { monthPlural, months } from './constants'
import { Event, Day } from './interfaces'

export const actionFn: Middleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action: Action): Action => {
    if (action instanceof Function) {
      return action(dispatch, getState)
    }

    return next(action)
  }

  export function dateToString(date: string): string {
    const parseDate = date.split('-')
    return `${parseDate[2]} ${monthPlural[parseInt(parseDate[1], 10) - 1]}`
  }

export function getMonthYearToString(date: string): string {
  const parseDate = date.split('-')
  return `${months[parseInt(parseDate[1], 10) - 1]} ${parseDate[0]}`
}

export function getTodayMonthYear(): string {
  const today = new Date()
  return `${today.getFullYear()}-${today.getMonth() + 1}`
}

export function parseFastEvent(event: string): Day {
  const parseEvent = event.split(','),
    date = new Date(parseEvent[0]),
    dayOfTheWeek = date.getDay(),
    title = parseEvent[1],
    members = parseEvent[2],
    description = parseEvent[3]


  if (isNaN(date.getTime()) || !title || !members || !description) {
    return null
  }

  return {
    date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
    dayOfTheWeek,
    event: {
      date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
      title,
      members,
      description
    }
  }
}

export function getAllLocalStorage(): Event[] {
  let eventList: Event[] = []
  for (let i = 0; i < localStorage.length; i++) {
    const day = JSON.parse(localStorage.getItem(localStorage.key(i))) as Day
    eventList.push(day.event)
  }
  return eventList
}

export function getCalendarDays(date: string): Day[] {
  const parseDate = date.split('-'),
    daysInMonth = new Date(parseInt(parseDate[0], 10), parseInt(parseDate[1], 10), 0).getDate(),
    days: Day[] = []
  for (let i = 1; i <= daysInMonth; i++) {
    const day = new Date(parseInt(parseDate[0], 10), parseInt(parseDate[1], 10) - 1, i),
      dayObj: Day = {
        date: `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`,
        dayOfTheWeek: day.getDay(),
        event: {
          date: `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`,
          title: '',
          members: '',
          description: ''
        }
      },
      dayLocal = JSON.parse(localStorage.getItem(`${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`))

    dayLocal ? days.push(dayLocal) : days.push(dayObj)
  }
  if (days[0].dayOfTheWeek !== 1) {
    const previousMonth = new Date(parseInt(parseDate[0], 10), parseInt(parseDate[1], 10) - 1, 0),
      count = days[0].dayOfTheWeek === 0 ? 6 : days[0].dayOfTheWeek - 1
    for (let i = 0; i <= count - 1; i++) {
      const dayInPreviousMonth = new Date(parseInt(parseDate[0], 10), parseInt(parseDate[1], 10) - 2, previousMonth.getDate() - i),
        dayObj: Day = {
          date: `${dayInPreviousMonth.getFullYear()}-${dayInPreviousMonth.getMonth() + 1}-${dayInPreviousMonth.getDate()}`,
          dayOfTheWeek: dayInPreviousMonth.getDay(),
          event: {
            date: `${dayInPreviousMonth.getFullYear()}-${dayInPreviousMonth.getMonth() + 1}-${dayInPreviousMonth.getDate()}`,
            title: '',
            members: '',
            description: ''
          }
        },
        dayLocal = JSON.parse(localStorage.getItem(`${dayInPreviousMonth.getFullYear()}-${dayInPreviousMonth.getMonth() + 1}-${dayInPreviousMonth.getDate()}`))
      dayLocal ? days.unshift(dayLocal) : days.unshift(dayObj)
    }
  }
  if (days[days.length - 1].dayOfTheWeek !== 0) {
    const count = 7 - days[days.length - 1].dayOfTheWeek
    for (let i = 1; i <= count; i++) {
      const dayInNextMonth = new Date(parseInt(parseDate[0], 10), parseInt(parseDate[1], 10), i),
        dayObj: Day = {
          date: `${dayInNextMonth.getFullYear()}-${dayInNextMonth.getMonth() + 1}-${dayInNextMonth.getDate()}`,
          dayOfTheWeek: dayInNextMonth.getDay(),
          event: {
            date: `${dayInNextMonth.getFullYear()}-${dayInNextMonth.getMonth() + 1}-${dayInNextMonth.getDate()}`,
            title: '',
            members: '',
            description: ''
          }
        },
        dayLocal = JSON.parse(localStorage.getItem(`${dayInNextMonth.getFullYear()}-${dayInNextMonth.getMonth() + 1}-${dayInNextMonth.getDate()}`))
      dayLocal ? days.push(dayLocal) : days.push(dayObj)
    }
  }
  return days
}