import { combineReducers } from 'redux'

import abilities from './abilities'
import currentId from './currentId'
import heroes from './heroes'

export const rootReducer = combineReducers({
  abilities,
  currentId,
  heroes
})
