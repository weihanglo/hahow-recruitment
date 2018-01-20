import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'

import profile, { profileEpic } from './profile'
import heroes, { heroesEpic } from './heroes'
import uploadState, { uploadStateEpic } from './uploadState'
import router, { routerEpic } from './router'

export const rootEpic = combineEpics(
  profileEpic,
  heroesEpic,
  uploadStateEpic,
  routerEpic
)

export const rootReducer = combineReducers({
  profile,
  heroes,
  uploadState,
  router
})
