import { SidebarStorage } from '../components/sidebar'
import { IAction } from '../interfaces'
import { actionsSidebar } from '../actions'

const initialState: SidebarStorage = {
  filter: false,
  loading: false
}

export function reducer(state = initialState, action: IAction): SidebarStorage {
  switch (action.type) {

    default:
      return { ...state }
  }
}
