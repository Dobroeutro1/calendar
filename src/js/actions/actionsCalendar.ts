import { Event, IAction } from '../interfaces'

export class Actions {
  readonly CHANGE_CURRENT_DATE = 'CHANGE_CURRENT_DATE'
  readonly ADD_EVENT = 'ADD_EVENT'
  readonly DELETE_EVENT = 'DELETE_EVENT'
  readonly CHANGE_EVENT = 'CHANGE_EVENT'

  changeCurrentDate = (date: string): IAction => ({ type: this.CHANGE_CURRENT_DATE, payload: date })
  addEvent = (data: Event): IAction => ({ type: this.ADD_EVENT, payload: data })
  deleteEvent = (date: string): IAction => ({ type: this.DELETE_EVENT, payload: date })
  changeEvent = (data: Event): IAction => ({ type: this.CHANGE_EVENT, payload: data })
}
