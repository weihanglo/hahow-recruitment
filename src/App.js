import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import Main from './components/Main'

const store = configureStore()

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}
