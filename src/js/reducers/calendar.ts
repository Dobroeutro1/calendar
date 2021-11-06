import { CalendarStorage } from '../components/calendar'
import { IAction, Event, Day } from '../interfaces'
import { actionsCalendar, actionsSidebar } from '../actions'
import { getCalendarDays, getTodayMonthYear } from '../utils'

const initialState: CalendarStorage = {
  currentDate: getTodayMonthYear(),
  days: getCalendarDays(getTodayMonthYear()),
}

function changeCurrentDate(state: CalendarStorage, date: string): CalendarStorage {
  return { ...state, currentDate: date, days: getCalendarDays(date)}
}

function addEvent(state: CalendarStorage, event: Event): CalendarStorage {
  const modifyDays = state.days.map((day) => {
    if (day.date === event.date) {
      return { ...day, event }
    }
    return day
  })
  return { ...state, days: modifyDays }
}

function deleteEvent(state: CalendarStorage, date: string): CalendarStorage {
  const modifyDays = state.days.map((day) => {
    if (day.date === date) {
      return { date: day.date, dayOfTheWeek: day.dayOfTheWeek, event: { date: date, members: '', description: '', title: '' } }
    }
    return day
  })
  return { ...state, days: modifyDays }
}

function changeEvent(state: CalendarStorage, event: Event): CalendarStorage {
  const modifyDays = state.days.map((day) => {
    if (day.date === event.date) {
      return { ...day, event }
    }
    return day
  })
  return { ...state, days: modifyDays }
}

function addFastEvent(state: CalendarStorage, newDay: Day): CalendarStorage {
  const modifyDays = state.days.map((day) => {
    if (day.date === newDay.date) {
      return newDay
    }
    return day
  })
  return { ...state, days: modifyDays }
}

export function reducer(state = initialState, action: IAction): CalendarStorage {
  switch (action.type) {
    case actionsCalendar.CHANGE_CURRENT_DATE:
      return changeCurrentDate(state, action.payload as string)
    case actionsCalendar.ADD_EVENT:
      return addEvent(state, action.payload as Event)
    case actionsCalendar.DELETE_EVENT:
      return deleteEvent(state, action.payload as string)
    case actionsCalendar.CHANGE_EVENT:
      return changeEvent(state, action.payload as Event)
    case actionsSidebar.ADD_FAST_EVENT:
      return addFastEvent(state, action.payload as Day)

    default:
      return { ...state }
  }
}
