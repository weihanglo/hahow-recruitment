export const UPDATE_ABILITIES = 'UPDATE_ABILITIES'
export const UPDATE_ABILITIES_SUCCESS = 'UPDATE_ABILITIES_SUCCESS'
export const UPDATE_ABILITIES_FAILURE = 'UPDATE_ABILITIES_FAILURE'

export function updateAbilities (abilities) {
  return {
    type: UPDATE_ABILITIES,
    abilities
  }
}
