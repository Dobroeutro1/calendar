import React from 'react'
import { SidebarProps, SidebarState } from './interfaces'
import { actionsSidebar } from '../../actions'

export class Sidebar extends React.PureComponent<SidebarProps, SidebarState> {
  constructor(props: SidebarProps) {
    super(props)
    this.state = { value: '' }
  }

  onClearValue = () => {
    this.setState({ value: '' })
  }

  onSetValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ value: event.currentTarget.value })
  }

  render(): React.ReactNode {
    return (
      <div className="sidebar">
        <div className='sidebar__content'>
          <div className='sidebar__buttons'>
            <button className='sidebar__button'>Добавить</button>
            <button className='sidebar__button'>Обновить</button>
          </div>
          <div className='sidebar__search'>
            <button className='sidebar__button_search' />
            <div className='search__control'>
              <input
                id='sidebar-search'
                type='text'
                placeholder='Введите событие'
                className='sidebar__input'
                onChange={this.onSetValue}
                value={this.state.value}
              />
              <label
                htmlFor='sidebar-search'
                className={`sidebar__label ${this.state.value.length > 0 ? 'sidebar__label_visible' : ''}`}
                onClick={this.onClearValue}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
