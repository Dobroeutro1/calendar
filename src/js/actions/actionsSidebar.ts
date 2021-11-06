import { Day, IAction } from '../interfaces'

export class Actions {
  readonly ADD_FAST_EVENT = 'ADD_FAST_EVENT'

  addFastEvent = (data: Day): IAction => ({ type: this.ADD_FAST_EVENT, payload: data })
}
