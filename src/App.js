import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import configureStore, { history } from './store/configureStore'
import Main from './components/Main'

const store = configureStore()

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Main />
        </ConnectedRouter>
      </Provider>
    )
  }
}
