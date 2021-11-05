import { connect } from 'react-redux'
import { Storage } from './interfaces'
import { Sidebar, SidebarProps } from './components/sidebar'
import { Calendar, CalendarProps } from './components/calendar'

export const SidebarContainer = connect(sidebar)(Sidebar),
  CalendarContainer = connect(calendar)(Calendar)

function sidebar(state: Storage): SidebarProps {
  return { ...state.sidebar }
}

function calendar(state: Storage): CalendarProps {
  return {...state.calendar}
}
