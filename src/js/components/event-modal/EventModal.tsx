import React from 'react'
import { EventModalProps } from './interfaces'
import { dateToString } from '../../utils'

export class EventModal extends React.PureComponent<EventModalProps, never> {
  render(): React.ReactNode {
    return (
      <form
        className={`event-modal ${this.props.show ? 'event-modal_visible' : ''}`}
        onClick={(event) => event.stopPropagation()}
        onSubmit={(event) => this.props.edit ? this.props.changeEvent(event) : this.props.addEvent(event)}
      >
        <button
          className='event-modal__btn_close'
          onClick={(event) => {
            event.preventDefault()
            this.props.handleShowEvent()
          }}
        />
        {this.props.edit
          ? <p className='event-modal__title'>{this.props.event.title}</p>
          : <input
            id='title'
            className='input event-modal__input'
            type='text'
            placeholder='Событие'
            value={this.props.event.title}
            onChange={this.props.onChangeEvent}
          />
        }
        {this.props.edit
          ? <p className='event-modal__date'>{this.props.event.date}</p>
          : <input
            className='input event-modal__input'
            type='text'
            placeholder='День,месяц, год'
            value={dateToString(this.props.event.date)}
            onChange={this.props.onChangeEvent}
          />
        }
        {this.props.edit
          ? <div className='event-modal__members'>Участники: <p className='event-modal__members_text'>{this.props.event.members}</p></div>
          : <input
            id='members'
            className='input event-modal__input'
            type='text'
            placeholder='Имена участников'
            value={this.props.event.members}
            onChange={this.props.onChangeEvent}
          />
        }

        <textarea
          id='description'
          className='input event-modal__textarea'
          placeholder='Описание'
          value={this.props.event.description}
          onChange={this.props.onChangeEvent}
        />
        <div className='event-modal__btn-group'>
          <button className='btn event-modal__btn' type='submit'>Готово</button>
          <button
            className='btn event-modal__btn'
            onClick={(event) => {
              event.preventDefault()
              this.props.deleteEvent()
            }}
          >
            Удалить
          </button>
        </div>
      </form>
    )
  }
}