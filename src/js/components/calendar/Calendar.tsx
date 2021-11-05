import React from 'react'
import { CalendarProps } from '.'
import { days } from './constants'
import { getMonthYearToString } from '../../utils'
import { actionsCalendar } from '../../actions'
import { IProps } from '../../interfaces'

export class Calendar extends React.PureComponent<CalendarProps, never> {
  render(): React.ReactNode {
    return (
      <div className='calendar'>
        <CalendarControl currentDate={this.props.currentDate} dispatch={this.props.dispatch} />
        <CalendarTable />
      </div>
    )
  }
}

export interface CalendarControlProps extends IProps {
  currentDate: string
}

class CalendarControl extends React.PureComponent<CalendarControlProps, never> {
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
        <button className='control__btn' onClick={this.decreaseCurrentDate} />
        <p className='control__date'>{getMonthYearToString(this.props.currentDate)}</p>
        <button className='control__btn' onClick={this.increaseCurrentDate} />
        <button className='control__btn control__btn_today' onClick={this.setTodayDate}>Сегодня</button>
      </div>
    )
  }
}

class CalendarTable extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <table className='calendar__table'>
        <thead>
          <Cell header={true} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
          <Cell header={true} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
          <Cell header={true} date='2021-11-04' event={{title: '', body: ''}} />
          <Cell header={true} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
          <Cell header={true} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
          <Cell header={true} date='2021-11-04' event={{title: '', body: ''}} />
          <Cell header={true} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
        </thead>
        <tbody>
        <tr>
          <Cell header={false} date='2021-11-04' event={{title: '', body: ''}} />
          <Cell header={false} date='2021-11-04' event={{title: '', body: ''}} />
          <Cell header={false} date='2021-11-04' event={{title: '', body: ''}} />
          <Cell header={false} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
          <Cell header={false} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
          <Cell header={false} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
          <Cell header={false} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
        </tr>
        <tr>
          <Cell header={false} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
          <Cell header={false} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
          <Cell header={false} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
          <Cell header={false} date='2021-11-04' event={{title: '', body: ''}} />
          <Cell header={false} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
          <Cell header={false} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
          <Cell header={false} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
        </tr>
        <tr>
          <Cell header={false} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
          <Cell header={false} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
          <Cell header={false} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
          <Cell header={false} date='2021-11-04' event={{title: '', body: ''}} />
          <Cell header={false} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
          <Cell header={false} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
          <Cell header={false} date='2021-11-04' event={{title: '', body: ''}} />
        </tr>
        <tr>
          <Cell header={false} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
          <Cell header={false} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
          <Cell header={false} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
          <Cell header={false} date='2021-11-04' event={{title: '', body: ''}} />
          <Cell header={false} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
          <Cell header={false} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
          <Cell header={false} date='2021-11-04' event={{title: 'Шашлыки', body: 'Филипп Коров, Дмитрий Табасков'}} />
        </tr>
        </tbody>
      </table>
    )
  }
}

export interface CellProps {
  date: string
  event: {
    title: string
    body: string
  }
  header: boolean
}

class Cell extends React.PureComponent<CellProps, never> {
  render(): React.ReactNode {
    const date = new Date(this.props.date)
    return (
      <td className={`cell ${this.props.event.title.length > 0 && this.props.event.body.length > 0 ? 'cell_filled' :''}`}>
        <p className='cell__title'>{this.props.header ? `${days[date.getDate()]}, ${date.getDay()}` : date.getDay()}</p>
        <div className='cell__content'>
          <p className='content__title'>{this.props.event.title}</p>
          <p className='content__text'>{this.props.event.body}</p>
        </div>
      </td>
    )
  }
}
