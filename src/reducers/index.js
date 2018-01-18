import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'

import profile, { profileEpic } from './profile'
import heroes, { heroesEpic } from './heroes'

export const rootEpic = combineEpics(
  profileEpic,
  heroesEpic
)

export const rootReducer = combineReducers({
  profile,
  heroes
})
