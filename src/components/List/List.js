import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'

export default class List extends React.PureComponent {
  static propTypes = {
    currentId: PropTypes.number,
    heroes: PropTypes.array.isRequired
  }

  render () {
    const { currentId, heroes } = this.props
    return heroes.map((hero, index) =>
      <Card
        key={hero.id}
        image={hero.image}
        name={hero.name}
        selected={currentId === hero.id}
      />
    )
  }
}
