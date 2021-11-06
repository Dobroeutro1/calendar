import React from 'react'
import { daysOfTheWeek } from '../../constants'
import { CalendarCellProps, CalendarCellState } from '.'
import { actionsCalendar } from '../../actions'
import { EventModal } from '../event-modal'

export class CalendarCell extends React.PureComponent<CalendarCellProps, CalendarCellState> {
  constructor(props: CalendarCellProps) {
    super(props)
    this.state = {
      date: new Date(),
      showEvent: false,
      event: {
        date: '',
        title: '',
        members: '',
        description: ''
      }
    }
  }

  componentDidMount(): void {
    if (this.props.date) {
      this.setState({ date: new Date(this.props.date), event: this.props.event })
    }
  }

  componentDidUpdate(prevProps: Readonly<CalendarCellProps>): void {
    if (prevProps !== this.props) {
      this.setState({ date: new Date(this.props.date), event: this.props.event })
    }
  }

  handleShowEvent = (): void => {
    this.setState({ showEvent: !this.state.showEvent })
  }

  onChangeEvent = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { id, value } = event.currentTarget
    this.setState((prev) => ({ ...prev, event: { ...prev.event, [id]: value } }))
  }

  addEvent = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    this.props.dispatch(actionsCalendar.addEvent(this.state.event))
    this.handleShowEvent()
  }

  deleteEvent = (): void => {
    this.props.dispatch(actionsCalendar.deleteEvent(this.state.event.date))
    this.handleShowEvent()
  }

  changeEvent = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    this.props.dispatch(actionsCalendar.changeEvent(this.state.event))
    this.handleShowEvent()
  }

  renderEventModal(): React.ReactNode {
    const edit = this.props.event.title.length > 0 || this.props.event.members.length > 0

    return (
      <EventModal
        show={this.state.showEvent}
        event={this.state.event}
        edit={edit}
        handleShowEvent={this.handleShowEvent}
        addEvent={this.addEvent}
        deleteEvent={this.deleteEvent}
        changeEvent={this.changeEvent}
        onChangeEvent={this.onChangeEvent}
      />
    )
  }

  render(): React.ReactNode {
    return (
      <td
        className={`cell 
          ${this.props.event.title.length > 0 || this.props.event.members.length > 0 ? 'cell_filled' :''} 
          ${this.state.showEvent ? 'cell_active' : ''}
        `}
        onClick={this.handleShowEvent}
      >
        <div className='cell__content_wrap'>
          {this.renderEventModal()}
          <p className='cell__title'>
            {
              this.props.header
                ? `${daysOfTheWeek[this.props.dayOfTheWeek]}, ${this.state.date.getDate()}`
                : this.state.date.getDate()
            }
          </p>
          <div className='cell__content'>
            <p className='content__title'>{this.props.event.title}</p>
            <p className='content__text'>{this.props.event.members}</p>
            <p className='content__text content__text_description'>{this.props.event.description}</p>
          </div>
        </div>
      </td>
    )
  }
}