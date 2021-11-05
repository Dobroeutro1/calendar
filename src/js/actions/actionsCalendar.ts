import { IAction, IActionAsync } from '../interfaces'

export class Actions {
  readonly CHANGE_CURRENT_DATE = 'CHANGE_CURRENT_DATE'

  changeCurrentDate = (date: string): IAction => ({type: this.CHANGE_CURRENT_DATE, payload: date})
}
