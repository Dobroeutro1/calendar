import { IProps } from '../../interfaces'

export interface SidebarControlProps extends IProps {

}

export interface SidebarControlState {
  showEventModal: boolean
  event: string
  ready: boolean
}