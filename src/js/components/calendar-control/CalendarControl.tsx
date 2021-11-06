import React from 'react'
import { CalendarControlProps } from '.'
import { actionsCalendar } from '../../actions'
import { getMonthYearToString } from '../../utils'

export class CalendarControl extends React.PureComponent<CalendarControlProps, never> {
  decreaseCurrentDate = (): void => {
    const date = new Date(this.props.currentDate)
    date.setMonth(date.getMonth() - 1)
    this.props.dispatch(actionsCalendar.changeCurrentDate(`${date.getFullYear()}-${date.getMonth() + 1}`))
  }

  increaseCurrentDate = (): void => {
    const date = new Date(this.props.currentDate)
    date.setMonth(date.getMonth() + 1)
    this.props.dispatch(actionsCalendar.changeCurrentDate(`${date.getFullYear()}-${date.getMonth() + 1}`))
  }

  setTodayDate = (): void => {
    const date = new Date()
    this.props.dispatch(actionsCalendar.changeCurrentDate(`${date.getFullYear()}-${date.getMonth() + 1}`))
  }

  render(): React.ReactNode {
    return (
      <div className='calendar__control'>
        <button className='btn control__btn' onClick={this.decreaseCurrentDate} />
        <p className='control__date'>{getMonthYearToString(this.props.currentDate)}</p>
        <button className='btn control__btn' onClick={this.increaseCurrentDate} />
        <button className='btn control__btn control__btn_today' onClick={this.setTodayDate}>Сегодня</button>
      </div>
    )
  }
}
