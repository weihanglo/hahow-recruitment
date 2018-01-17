import React from 'react'

import List from './List'
import Profile from './Profile'

export default class Main extends React.Component {
  render () {
    return (
      <div>
        <List />
        <Profile />
      </div>
    )
  }
}
