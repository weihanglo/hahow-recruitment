import React from 'react'
import PropTypes from 'prop-types'

import AbilityCounter from './AbilityCounter'

export default class Profile extends React.Component {
  static propTypes = {
    abilities: PropTypes.array.isRequired
  }

  render () {
    const { abilities } = this.props
    return (
      <div>
        {abilities.map(ability => <AbilityCounter {...ability} />)}
      </div>
    )
  }
}
