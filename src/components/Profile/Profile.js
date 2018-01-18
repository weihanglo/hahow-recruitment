import React from 'react'
import PropTypes from 'prop-types'

import AbilityCounter from './AbilityCounter'

export default class Profile extends React.Component {
  static propTypes = {
    abilities: PropTypes.object.isRequired,
    fetching: PropTypes.bool
  }

  render () {
    const { abilities } = this.props
    return (
      <div>
        {Object
          .entries(abilities)
          .map(([name, value]) =>
            <AbilityCounter
              key={name}
              name={name}
              value={value}
            />
          )
        }
      </div>
    )
  }
}
