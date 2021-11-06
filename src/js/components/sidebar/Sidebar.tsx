import React from 'react'
import { SidebarProps, SidebarState } from './interfaces'
import { SidebarControl } from '../sidebar-control'
import { SidebarSearch } from '../sidebar-search'

export class Sidebar extends React.PureComponent<SidebarProps, SidebarState> {
  constructor(props: SidebarProps) {
    super(props)
    this.state = { value: '', eventList: [] }
  }

  componentDidMount(): void {
    if (this.props.eventList) {
      this.setState({ eventList: this.props.eventList })
    }
  }

  componentDidUpdate(prevProps: Readonly<SidebarProps>): void {
    if (prevProps.eventList !== this.props.eventList) {
      this.setState({ eventList: this.props.eventList })
    }
  }

  onClearValue = () => {
    this.setState({ value: '' })
  }

  onSetValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ value: event.currentTarget.value }, this.onFilterEventList)
  }

  onFilterEventList = (): void => {
    const filteredEventList = this.props.eventList.filter((event) => {
      if (
        event.date.includes(this.state.value)
        || event.title.includes(this.state.value)
        || event.members.includes(this.state.value)
        || event.description.includes(this.state.value)
      ) {
        return event
      }
    }).sort((first, second) => {
      const firstDate = new Date(first.date),
        secondDate = new Date(second.date)

      return secondDate.getTime() - firstDate.getTime()
    })

    this.setState({ eventList: filteredEventList })
  }

  render(): React.ReactNode {
    return (
      <div className="sidebar">
        <div className='sidebar__content'>
          <SidebarControl dispatch={this.props.dispatch} />
          <SidebarSearch
            onSetValue={this.onSetValue}
            onClearValue={this.onClearValue}
            eventList={this.state.eventList}
            value={this.state.value}
            dispatch={this.props.dispatch}
          />
        </div>
      </div>
    )
  }
}
