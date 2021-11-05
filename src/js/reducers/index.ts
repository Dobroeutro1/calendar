import { combineReducers } from 'redux'

import { reducer as sidebar } from './sidebar'
import { reducer as calendar } from './calendar'

export default combineReducers({ sidebar, calendar })
