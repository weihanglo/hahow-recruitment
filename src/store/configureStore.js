import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

import { rootEpic, rootReducer } from '../reducers'

const basename = process.env.BASENAME

export const history = createHistory({ basename })

export default function configureStore (preloadState) {
  // Enable Redux devtools addon/extension.
  const composeEnhancers = process.env.NODE_ENV !== 'production'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // Development-only
    : compose

  const epicMiddleware = createEpicMiddleware(rootEpic)
  const middlewares = [epicMiddleware, routerMiddleware(history)]

  return createStore(
    rootReducer,
    preloadState,
    composeEnhancers(applyMiddleware(...middlewares))
  )
}
