import React from 'react'
import PropTypes from 'prop-types'
import { Spinner } from '@blueprintjs/core'

import UploadButton from './UploadButton'
import Counter from './Counter'
import './style.css'

export default class Profile extends React.Component {
  static propTypes = {
    fetching: PropTypes.bool,
    counterEnabled: PropTypes.objectOf(PropTypes.object),
    onDecrease: PropTypes.func.isRequired,
    onIncrease: PropTypes.func.isRequired,
    profile: PropTypes.object
  }

  _renderCounters () {
    const {
      counterEnabled,
      onDecrease,
      onIncrease,
      profile
    } = this.props
    return Object
      .entries(profile)
      .map(([name, value]) =>
        <Counter
          key={name}
          name={name}
          value={value}
          enabled={counterEnabled[name]}
          onIncrease={() => onIncrease(name)}
          onDecrease={() => onDecrease(name)}
        />
      )
  }

  render () {
    if (this.props.fetching) {
      return (
        <div className='profile__container'>
          <div style={{ width: '2.5em', height: '2.5em' }}>
            <Spinner intent='primary' />
          </div>
        </div>
      )
    }

    return (
      <div className='profile__container'>
        <div>
          {this._renderCounters()}
        </div>
        <UploadButton />
      </div>
    )
  }
}
