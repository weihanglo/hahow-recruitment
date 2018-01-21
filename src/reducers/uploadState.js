import { ajax } from 'rxjs/observable/dom/ajax'

import {
  UPLOAD_PROFILE,
  UPLOAD_PROFILE_SUCCESS,
  UPLOAD_PROFILE_FAILURE
} from '../actions/uploadProfile'
import { getHeroId, getProfile } from './profile'

const profileUrl = id =>
  `https://hahow-recruit.herokuapp.com/heroes/${id}/profile`

export default function uploadState (state = { uploading: false }, action) {
  switch (action.type) {
    case UPLOAD_PROFILE:
      return {
        uploading: true
      }
    case UPLOAD_PROFILE_SUCCESS:
      return {
        uploading: false
      }
    case UPLOAD_PROFILE_FAILURE:
      return {
        uploading: false,
        error: action.error
      }
    default:
      return state
  }
}

// ------------
// Selectors
// ------------

export const getUploadError = ({ uploadState }) => uploadState.error

export const getUploading = ({ uploadState }) => uploadState.uploading

// --------
// Epics
// --------

export const uploadStateEpic = (action$, store) => action$
  .ofType(UPLOAD_PROFILE)
  .mergeMap(action => {
    const state = store.getState()
    const heroId = getHeroId(state)
    const profile = getProfile(state)
    return ajax({
      url: profileUrl(heroId),
      headers: { 'Content-Type': 'application/json' },
      method: 'PATCH',
      body: JSON.stringify(profile),
      crossDomain: true
    })
  })
  .mapTo({ type: UPLOAD_PROFILE_SUCCESS })
  .catch(error => ({ type: UPLOAD_PROFILE_FAILURE, error }))
