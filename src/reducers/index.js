import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'

import profile, { profileEpic } from './profile'
import heroes, { heroesEpic } from './heroes'
import uploadState, { uploadStateEpic } from './uploadState'

export const rootEpic = combineEpics(
  profileEpic,
  heroesEpic,
  uploadStateEpic
)

export const rootReducer = combineReducers({
  profile,
  heroes,
  uploadState
})
