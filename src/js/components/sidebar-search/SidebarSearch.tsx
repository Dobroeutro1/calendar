import React from 'react'
import { SidebarSearchProps } from '.'
import { SidebarSuggestions } from '../sidebar-suggestions'
import { actionsCalendar } from '../../actions'

export class SidebarSearch extends React.PureComponent<SidebarSearchProps, never> {
  goToDateEvent = (date: string): void => {
    this.props.dispatch(actionsCalendar.changeCurrentDate(date))
    this.props.onClearValue()
  }

  render(): React.ReactNode {
    return (
      <div className='sidebar__search'>
        <SidebarSuggestions
          show={this.props.value.length > 0 && this.props.eventList.length > 0}
          eventList={this.props.eventList}
          goToDateEvent={this.goToDateEvent}
        />
        <button className='sidebar__button_search' />
        <div className='search__control'>
          <input
            id='sidebar-search'
            type='text'
            placeholder='Введите событие'
            className='input sidebar__input'
            onChange={this.props.onSetValue}
            value={this.props.value}
          />
          <label
            htmlFor='sidebar-search'
            className={`label ${this.props.value.length > 0 ? 'label_visible' : ''}`}
            onClick={this.props.onClearValue}
          />
        </div>
      </div>
    )
  }
}