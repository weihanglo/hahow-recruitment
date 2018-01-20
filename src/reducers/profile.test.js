/**
 * @jest-environment jsdom
 */
import profile, {
  getCounterEnabled
} from './profile'
import {
  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS
} from '../actions/fetchProfile'
import {
  DECREASE_ABILITY,
  INCREASE_ABILITY
} from '../actions/updateProfile'

describe('profile', () => {
  it('selector -> getCounterEnabled', () => {
    // No more available points
    let result = getCounterEnabled.resultFunc(0, { str: 0 })
    expect(result).toEqual({
      str: { canIncrease: false, canDecrease: false }
    })
    // Got some available points
    result = getCounterEnabled.resultFunc(1, { str: 0 })
    expect(result).toEqual({
      str: { canIncrease: true, canDecrease: false }
    })

    // Can decrease
    result = getCounterEnabled.resultFunc(0, { str: 1 })
    expect(result).toEqual({
      str: { canIncrease: false, canDecrease: true }
    })
  })

  it('reducer -> FETCH_PROFILE', () => {
    // Increase
    let result = profile({}, { type: FETCH_PROFILE, id: 5 })
    expect(result).toEqual({
      profile: null,
      id: 5,
      fetching: true,
      availablePoints: 0
    })

    result = profile(
      { id: 5, availablePoints: 0 },
      { type: FETCH_PROFILE_SUCCESS, id: 5, profile: { str: 1 } }
    )
    expect(result).toEqual({
      profile: { str: 1 },
      id: 5,
      fetching: false,
      availablePoints: 0
    })
  })

  it('reducer -> INCREASE_ABILITY', () => {
    let result = profile(
      { id: 5, availablePoints: 1, profile: { str: 0 }, fetching: false },
      { type: INCREASE_ABILITY, name: 'str' }
    )
    expect(result).toEqual({
      profile: { str: 1 },
      id: 5,
      fetching: false,
      availablePoints: 0
    })
  })

  it('reducer -> DECREASE_ABILITY', () => {
    let result = profile(
      { id: 5, availablePoints: 0, profile: { str: 1 }, fetching: false },
      { type: DECREASE_ABILITY, name: 'str' }
    )
    expect(result).toEqual({
      profile: { str: 0 },
      id: 5,
      fetching: false,
      availablePoints: 1
    })
  })
})
