import { ajax } from 'rxjs/observable/dom/ajax'

import {
  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE
} from '../actions/fetchProfile'

const profileUrl = id =>
  `http://hahow-recruit.herokuapp.com/heroes/${id}/profile`

const initialState = {
  id: null,
  fetching: false,
  profile: {}
}

export default function profile (state = initialState, action) {
  switch (action.type) {
    case FETCH_PROFILE:
      return {
        ...state,
        id: action.id,
        fetching: true
      }
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        fetching: false,
        profile: action.profile
      }
    case FETCH_PROFILE_FAILURE:
      return {
        id: null,
        fetching: false,
        profile: {}
      }
    default:
      return state
  }
}

export const profileEpic = action$ => action$
  .ofType(FETCH_PROFILE)
  .mergeMap(action => ajax({ url: profileUrl(action.id), crossDomain: true }))
  .map(({ response }) => ({ type: FETCH_PROFILE_SUCCESS, profile: response }))
  .catch(error => ({ type: FETCH_PROFILE_FAILURE, error }))
