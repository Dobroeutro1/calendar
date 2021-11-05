import { IProps } from '../../interfaces'

export interface SidebarStorage {
  filter: boolean
  loading: boolean
}

export interface SidebarProps extends IProps {
  filter: boolean
  loading: boolean
}

export interface SidebarState {
  value: string
}
