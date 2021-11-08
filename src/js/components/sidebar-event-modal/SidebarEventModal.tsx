import React from 'react'
import { SidebarEventModalProps } from '.'

export class SidebarEventModal extends React.PureComponent<SidebarEventModalProps, never> {
  render(): React.ReactNode {
    return (
      <form className={`sidebar-event-modal ${this.props.show ? 'sidebar-event-modal_visible' : ''}`} onSubmit={this.props.onSubmitEvent}>
        <button className='event-modal__btn_close' onClick={this.props.handleShowEventPopup} />
        <div className='sidebar-event-modal__control'>
          <input
            id='sidebar-event'
            className='input'
            type='text'
            placeholder='2021-01-01, Кутеж, Серж'
            value={this.props.event}
            onChange={this.props.onChangeEvent}
          />
          <label
            htmlFor='sidebar-event'
            className={`label ${this.props.event.length > 0 ? 'label_visible' : ''}`}
            onClick={this.props.onClearState}
          />
        </div>
        <button className='btn event-modal__btn' type='submit' disabled={!this.props.ready}>Создать</button>
      </form>
    )
  }
}