import React from 'react'
import PropTypes from 'prop-types'

/**
 * Counter to increase/decrease a specific ability of a hero.
 */
export default class AbilityCounter extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  }

  render () {
    const { name, value } = this.props
    return (
      <div>
        <span>{name}</span>
        <button>+</button>
        <span>{value}</span>
        <button>-</button>
      </div>
    )
  }
}
