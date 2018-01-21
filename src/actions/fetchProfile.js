export const FETCH_PROFILE = 'FETCH_PROFILE'
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS'
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE'
export const CLEAR_PROFILE = 'CLEAR_PROFILE'

export function fetchProfile (id) {
  return { type: FETCH_PROFILE, id }
}

export function clearProfile () {
  return { type: CLEAR_PROFILE }
}
