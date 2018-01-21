import {
  routerReducer as router,
  LOCATION_CHANGE
} from 'react-router-redux'

import { fetchProfile } from '../actions/fetchProfile'
import { getHeroId } from '../reducers/profile'

export default router

export const routerEpic = (action$, store) => action$
  .ofType(LOCATION_CHANGE)
  .map(({ payload }) => payload.pathname.split('/')[2])
  .filter(id => !isNaN(parseInt(id)) && getHeroId(store.getState()) !== id)
  .map(fetchProfile)
