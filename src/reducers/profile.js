import { createSelector } from 'reselect'
import { ajax } from 'rxjs/observable/dom/ajax'

import {
  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE
} from '../actions/fetchProfile'
import {
  DECREASE_ABILITY,
  INCREASE_ABILITY
} from '../actions/updateProfile'

const profileUrl = id =>
  `http://hahow-recruit.herokuapp.com/heroes/${id}/profile`

const initialState = {
  id: null,
  fetching: false,
  profile: null,
  availablePoints: 0
}

const profileReducer = (state, action) => {
  switch (action.type) {
    case INCREASE_ABILITY:
      return {
        ...state,
        [action.name]: ++state[action.name]
      }
    case DECREASE_ABILITY:
      return {
        ...state,
        [action.name]: --state[action.name]
      }
    default:
      return state
  }
}

export default function profile (state = initialState, action) {
  switch (action.type) {
    case FETCH_PROFILE:
      return {
        profile: null,
        id: action.id,
        fetching: true,
        availablePoints: 0
      }
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        fetching: false,
        profile: action.profile
      }
    case FETCH_PROFILE_FAILURE:
      return {
        ...state,
        fetching: false
      }
    case INCREASE_ABILITY:
      return {
        ...state,
        profile: profileReducer(state.profile, action),
        availablePoints: --state.availablePoints
      }
    case DECREASE_ABILITY:
      return {
        ...state,
        profile: profileReducer(state.profile, action),
        availablePoints: ++state.availablePoints
      }
    default:
      return state
  }
}

// ------------
// Selectors
// ------------

export const getProfileFetchState = ({ profile }) => profile.fetching

/**
 * Select remaining points that can strengthen a heor's abilities.
 */
export const getAvailablePoints = ({ profile }) => profile.availablePoints

/**
 * Select current profile of a hero.
 */
export const getProfile = ({ profile }) => profile.profile

/**
 * Select current hero ID.
 */
export const getHeroId = ({ profile }) => profile.id

/**
 * Determine increase/decrese counter enabled state of current profile.
 */
export const getCounterEnabled = createSelector(
  getAvailablePoints,
  getProfile,
  (availablePoints, profile) => {
    const state = {}
    const canIncrease = availablePoints > 0
    for (let name in profile) {
      state[name] = {
        canIncrease,
        canDecrease: profile[name] > 0
      }
    }
    return state
  }
)

// --------
// Epics
// --------

/**
 * A redux-observable epic that sends GET request to get a heor's profile.
 */
export const profileEpic = action$ => action$
  .ofType(FETCH_PROFILE)
  .mergeMap(action => ajax({ url: profileUrl(action.id), crossDomain: true }))
  .map(({ response }) => ({ type: FETCH_PROFILE_SUCCESS, profile: response }))
  .catch(error => ({ type: FETCH_PROFILE_FAILURE, error }))
