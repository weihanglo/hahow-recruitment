import React from 'react'
import PropTypes from 'prop-types'

/**
 * Counter to increase/decrease a specific ability of a hero.
 */
export default class AbilityCounter extends React.PureComponent {
  static propTypes = {
    abilityName: PropTypes.string.isRequired,
    value: PropTypes.object.isRequired
  }

  render () {
    const { abilityName, value } = this.props
    return (
      <div>
        <span>{abilityName}</span>
        <button>+</button>
        <span>{value}</span>
        <button>-</button>
      </div>
    )
  }
}
