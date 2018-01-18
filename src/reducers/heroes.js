import { ajax } from 'rxjs/observable/dom/ajax'
import {
  FETCH_HEROES,
  FETCH_HEROES_SUCCESS,
  FETCH_HEROES_FAILURE
} from '../actions/fetchHeroes'

const initialState = {
  fetching: false,
  heroes: []
}

export default function heroes (state = initialState, action) {
  switch (action.type) {
    case FETCH_HEROES:
      return {
        ...state,
        fetching: true
      }
    case FETCH_HEROES_SUCCESS:
      return {
        fetching: false,
        heroes: action.heroes
      }
    case FETCH_HEROES_FAILURE:
      return {
        fetching: false,
        heroes: []
      }
    default:
      return state
  }
}

const heroesUrl = 'https://hahow-recruit.herokuapp.com/heroes'

export const heroesEpic = action$ => action$
  .ofType(FETCH_HEROES)
  .mergeMap(action => ajax({ url: heroesUrl, crossDomain: true }))
  .map(({ response }) => ({ type: FETCH_HEROES_SUCCESS, heroes: response }))
  .catch(error => ({ type: FETCH_HEROES_FAILURE, error }))
