import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'

export default class List extends React.PureComponent {
  static propTypes = {
    currentId: PropTypes.number,
    fetchHeroes: PropTypes.func.isRequired,
    fetchProfile: PropTypes.func.isRequired,
    fetching: PropTypes.bool,
    heroes: PropTypes.array.isRequired
  }

  componentDidMount () {
    this.props.fetchHeroes()
  }

  render () {
    const { currentId, heroes, fetchProfile } = this.props
    return heroes.map((hero, index) =>
      <Card
        key={hero.id}
        image={hero.image}
        name={hero.name}
        selected={currentId === hero.id}
        onClick={() => fetchProfile(hero.id)}
      />
    )
  }
}
