import {
  compose,
  createStore
} from 'redux'

import { rootReducer } from '../reducers'

const composeEnhancers = process.env.NODE_ENV !== 'production'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // Development-only
  : compose

export default function configureStore (preloadState) {
  return createStore(rootReducer, preloadState, composeEnhancers())
}
