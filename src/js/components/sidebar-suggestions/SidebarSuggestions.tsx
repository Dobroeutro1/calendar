import React from 'react'
import { SidebarSuggestionsProps } from '.'
import { dateToString } from '../../utils'
import { actionsCalendar } from '../../actions'

export class SidebarSuggestions extends React.PureComponent<SidebarSuggestionsProps, never> {
  render(): React.ReactNode {
    return (
      <div className={`sidebar-suggestion ${this.props.show ? 'sidebar-suggestion_visible' : ''}`}>
        <div className='sidebar-suggestion__event-list'>
          {this.props.eventList.map((event) => {
            return (
              <div className='suggestion' onClick={() => this.props.goToDateEvent(event.date)}>
                <p className='suggestion__title'>{event.title}</p>
                <p className='suggestion__text'>{dateToString(event.date)}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}