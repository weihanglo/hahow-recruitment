export const INCREASE_ABILITY = 'INCREASE_ABILITY'
export const DECREASE_ABILITY = 'DECREASE_ABILITY'

export const increaseAbility = name => ({
  type: INCREASE_ABILITY,
  name
})

export const decreaseAbility = name => ({
  type: DECREASE_ABILITY,
  name
})
