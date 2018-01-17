export const FETCH_PROFILE = 'FETCH_PROFILE'
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS'
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE'

export function fetchProfile () {
  return { type: FETCH_PROFILE }
}
