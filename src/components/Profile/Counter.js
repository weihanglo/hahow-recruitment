import React from 'react'
import PropTypes from 'prop-types'

/**
 * Counter to increase/decrease a specific ability of a profile.
 */
export default class Counter extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onDecrease: PropTypes.func.isRequired,
    onIncrease: PropTypes.func.isRequired,
    enabled: PropTypes.objectOf(PropTypes.bool),
    value: PropTypes.number.isRequired
  }

  render () {
    const {
      enabled: { canIncrease, canDecrease },
      name,
      onDecrease,
      onIncrease,
      value
    } = this.props
    return (
      <div>
        <span>{name}</span>
        <button onClick={onIncrease} disabled={!canIncrease}>
          +
        </button>
        <span>{value}</span>
        <button onClick={onDecrease} disabled={!canDecrease}>
          -
        </button>
      </div>
    )
  }
}
