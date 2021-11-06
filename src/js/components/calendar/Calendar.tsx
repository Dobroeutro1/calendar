import React from 'react'
import { CalendarProps } from '.'
import { CalendarControl } from '../calendar-control'
import { CalendarTable } from '../calendar-table'

export class Calendar extends React.PureComponent<CalendarProps, never> {
  render(): React.ReactNode {
    return (
      <div className='calendar'>
        <CalendarControl currentDate={this.props.currentDate} dispatch={this.props.dispatch} />
        <CalendarTable days={this.props.days} dispatch={this.props.dispatch} />
      </div>
    )
  }
}





