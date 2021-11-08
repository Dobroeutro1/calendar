import { SidebarStorage } from '../components/sidebar'
import { Day, Event, IAction } from '../interfaces'
import { getAllLocalStorage } from '../utils'
import { actionsCalendar, actionsSidebar } from '../actions'

const initialState: SidebarStorage = {
  eventList: getAllLocalStorage()
}

function addEvent(state: SidebarStorage, event: Event): SidebarStorage {
  const date = new Date(event.date)
  localStorage.setItem(event.date, JSON.stringify({ date: event.date, dayOfTheWeek: date.getDay(), event }))
  return { ...state, eventList: getAllLocalStorage() }
}

function deleteEvent(state: SidebarStorage, date: string): SidebarStorage {
  localStorage.removeItem(date)
  return { ...state, eventList: getAllLocalStorage() }
}

function changeEvent(state: SidebarStorage, event: Event): SidebarStorage {
  const date = new Date(event.date)
  localStorage.setItem(event.date, JSON.stringify({ date: event.date, dayOfTheWeek: date.getDay(), event }))
  return { ...state, eventList: getAllLocalStorage() }
}

function addFastEvent(state: SidebarStorage, day: Day): SidebarStorage {
  localStorage.setItem(day.date, JSON.stringify({ date: day.date, dayOfTheWeek: day.dayOfTheWeek, event: day.event }))
  return {...state, eventList: getAllLocalStorage() }
}

export function reducer(state = initialState, action: IAction): SidebarStorage {
  switch (action.type) {
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
