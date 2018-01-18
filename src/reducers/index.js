import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'

import abilities, { abilitiesEpic } from './abilities'
import heroes, { heroesEpic } from './heroes'

export const rootEpic = combineEpics(
  abilitiesEpic,
  heroesEpic
)

export const rootReducer = combineReducers({
  abilities,
  heroes
})
