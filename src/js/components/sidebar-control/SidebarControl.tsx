import React from 'react'
import { SidebarControlProps, SidebarControlState } from './interfaces'
import { SidebarEventModal } from '../sidebar-event-modal'
import { actionsSidebar } from '../../actions'
import { parseFastEvent } from '../../utils'

export class SidebarControl extends React.PureComponent<SidebarControlProps, SidebarControlState> {
  constructor(props: SidebarControlProps) {
    super(props)
    this.state = {
      showEventModal: false,
      event: '',
      ready: false
    }
  }

  handleShowEventPopup = (): void => {
    this.setState({ showEventModal: !this.state.showEventModal })
  }

  onChangeEvent = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ event: event.currentTarget.value }, this.onCheckReady)
  }

  onCheckReady = (): void => {
    const fastEvent = parseFastEvent(this.state.event)
    if (!fastEvent) {
      this.setState({ ready: false })
      return
    }

    this.setState({ ready: true })
  }

  onClearState = (): void => {
    this.setState({ event: '' })
  }

  onSubmitEvent = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    this.props.dispatch(actionsSidebar.addFastEvent(parseFastEvent(this.state.event)))
    this.onClearState()
  }

  render() {
    return (
      <div className='sidebar__buttons'>
        <SidebarEventModal
          show={this.state.showEventModal}
          ready={this.state.ready}
          event={this.state.event}
          onChangeEvent={this.onChangeEvent}
          onClearState={this.onClearState}
          handleShowEventPopup={this.handleShowEventPopup}
          onSubmitEvent={this.onSubmitEvent}
        />
        <button className='sidebar__button' onClick={this.handleShowEventPopup}>Добавить</button>
        <button className='sidebar__button'>Обновить</button>
      </div>
    )
  }
}