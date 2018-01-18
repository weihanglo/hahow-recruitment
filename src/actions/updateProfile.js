export const UPDATE_PROFILE = 'UPDATE_PROFILE'
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS'
export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE'

export function updateProfile (profile) {
  return {
    type: UPDATE_PROFILE,
    profile
  }
}
