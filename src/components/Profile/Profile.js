import React from 'react'
import PropTypes from 'prop-types'

import Counter from './Counter'

export default class Profile extends React.Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    fetching: PropTypes.bool
  }

  render () {
    const { profile } = this.props
    return (
      <div>
        {Object
          .entries(profile)
          .map(([name, value]) =>
            <Counter
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
