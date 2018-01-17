export const FETCH_HEROES = 'FETCH_HEROES'
export const FETCH_HEROES_SUCCESS = 'FETCH_HEROES_SUCCESS'
export const FETCH_HEROES_FAILURE = 'FETCH_HEROES_FAILURE'

export function fetchHeroes () {
  return { type: FETCH_HEROES }
}
