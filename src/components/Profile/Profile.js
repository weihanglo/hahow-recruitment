import React from 'react'
import PropTypes from 'prop-types'

import Counter from './Counter'

export default class Profile extends React.Component {
  static propTypes = {
    availablePoints: PropTypes.number.isRequired,
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
    const { profile, availablePoints } = this.props
    if (!profile) {
      return null
    }

    return (
      <div>
        <div>
          {this._renderCounters()}
        </div>
        <div>
          <p>剩餘點數：{availablePoints}</p>
          <button>儲存</button>
        </div>
      </div>
    )
  }
}
