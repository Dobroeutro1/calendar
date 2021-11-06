import React from 'react'
import { CalendarCell } from '../calendar-cell'
import { CalendarTableProps } from '.'

export class CalendarTable extends React.PureComponent<CalendarTableProps, never> {
  renderHead(): React.ReactNode {
    const days = this.props.days.slice(0, 7)

    return (
      <tr className='table__row'>
        {days.map((day) => <CalendarCell
          key={day.date}
          date={day.date}
          dayOfTheWeek={day.dayOfTheWeek}
          event={day.event}
          header={true}
          dispatch={this.props.dispatch}
        />)}
      </tr>
    )
  }

  renderBody(): React.ReactNode {
    const secondRow = this.props.days.slice(7, 14),
      thirdRow = this.props.days.slice(14, 21),
      fourthRow = this.props.days.slice(21, 28),
      fifthRow = this.props.days.slice(28, 35),
      sixthRow = this.props.days.slice(35, 42)

    return (
      <>
        <tr className='table__row'>
          {secondRow.map((day) => <CalendarCell
            key={day.date}
            date={day.date}
            dayOfTheWeek={day.dayOfTheWeek}
            event={day.event} header={false}
            dispatch={this.props.dispatch}
          />)}
        </tr>
        <tr className='table__row'>
          {thirdRow.map((day) => <CalendarCell
            key={day.date}
            date={day.date}
            dayOfTheWeek={day.dayOfTheWeek}
            event={day.event} header={false}
            dispatch={this.props.dispatch}
          />)}
        </tr>
        <tr className='table__row'>
          {fourthRow.map((day) => <CalendarCell
              key={day.date}
              date={day.date}
              dayOfTheWeek={day.dayOfTheWeek}
              event={day.event} header={false}
              dispatch={this.props.dispatch}
          />)}
        </tr>
        <tr className='table__row'>
          {fifthRow.map((day) => <CalendarCell
            key={day.date}
            date={day.date}
            dayOfTheWeek={day.dayOfTheWeek}
            event={day.event} header={false}
            dispatch={this.props.dispatch}
          />)}
        </tr>
        <tr className='table__row'>
          {sixthRow.map((day) => <CalendarCell
            key={day.date}
            date={day.date}
            dayOfTheWeek={day.dayOfTheWeek}
            event={day.event} header={false}
            dispatch={this.props.dispatch}
          />)}
        </tr>
      </>
    )
  }

  render(): React.ReactNode {
    return (
      <table className='calendar__table'>
        {this.renderHead()}
        {this.renderBody()}
      </table>
    )
  }
}
