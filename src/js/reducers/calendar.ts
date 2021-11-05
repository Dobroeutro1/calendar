import { CalendarStorage } from '../components/calendar'
import { IAction } from '../interfaces'
import { actionsCalendar } from '../actions'
import { getTodayMonthYear } from '../utils'

const initialState: CalendarStorage = {
  currentDate: getTodayMonthYear()
}

function changeCurrentDate(state: CalendarStorage, date: string): CalendarStorage {
  const parseDate = date.split('-'),
    daysInMonth = new Date(parseInt(parseDate[0], 10), parseInt(parseDate[1], 10), 0).getDate(),
    months = []

  for (let i = 1; i <= daysInMonth; i++) {
    const monthElement = new Date(parseInt(parseDate[0], 10), parseInt(parseDate[1], 10) - 1, i),
      monthObj = {
        date: `${monthElement.getFullYear()}-${monthElement.getMonth() + 1}-${monthElement.getDate()}`,
        dayOfTheWeek: monthElement.getDay(),
        event: {
          title: '',
          body: ''
        }
      }
    months.push(monthObj)
  }

  if (months[0].dayOfTheWeek !== 1) {
    const parseMonthDate = months[0].date.split('-'),
      daysInPreviousMonth = new Date(parseInt(parseMonthDate[0], 10), parseInt(parseMonthDate[1], 10) - 1, 0).getDate()

    for (let i = 0; i < months[0].dayOfTheWeek + 2; i++) {
      const monthElement = new Date(parseInt(parseMonthDate[0], 10), parseInt(parseMonthDate[1], 10) - 2, daysInPreviousMonth - i),
        monthObj = {
          date: `${monthElement.getFullYear()}-${monthElement.getMonth() + 1}-${monthElement.getDate()}`,
          dayOfTheWeek: monthElement.getDay(),
          event: {
            title: '',
            body: ''
          }
        }
      months.splice(0, 0, monthObj)
    }
  }

  if (months.length < 35) {
    console.log(`добавить в конец ${35 - months.length}`)
    const parseMonthDate = months[0].date.split('-')

    for (let i = 1; i <= 35 - months.length; i++) {
      const monthElement = new Date(parseInt(parseMonthDate[0], 10), parseInt(parseMonthDate[1], 10) - 2, i),
        monthObj = {
        date: `${monthElement.getFullYear()}-${monthElement.getMonth() + 1}-${monthElement.getDate()}`,
        dayOfTheWeek: monthElement.getDay(),
        event: {
          title: '',
          body: ''
        }
      }
      months.push(monthObj)
    }
  }

  console.log('months', months)

  return {...state, currentDate: date}
}

export function reducer(state = initialState, action: IAction): CalendarStorage {
  switch (action.type) {
    case actionsCalendar.CHANGE_CURRENT_DATE:
      return changeCurrentDate(state, action.payload as string)

    default:
      return { ...state }
  }
}
