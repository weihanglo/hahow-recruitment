import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@blueprintjs/core'

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
      <div className='profile__counter'>
        <span>{name}</span>
        <span>
          <Button
            onClick={onIncrease}
            disabled={!canIncrease}
            iconName='plus'
          />
          <span className='profile__value'>{value}</span>
          <Button
            onClick={onDecrease}
            disabled={!canDecrease}
            iconName='minus'
          />
        </span>
      </div>
    )
  }
}
