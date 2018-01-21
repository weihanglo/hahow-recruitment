import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import List from './List'
import Profile from './Profile'
import './Main.css'

export default class Main extends React.Component {
  render () {
    return (
      <div className='main__container'>
        <Route exact path='/' render={() => <Redirect to='/heroes' />} />
        <Route path='/heroes' component={List} />
        <Route path='/heroes/:heroId' component={Profile} />
      </div>
    )
  }
}
