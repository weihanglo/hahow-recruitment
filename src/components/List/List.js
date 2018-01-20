import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'

export default class List extends React.PureComponent {
  static propTypes = {
    currentId: PropTypes.string,
    fetchHeroes: PropTypes.func.isRequired,
    fetching: PropTypes.bool,
    heroes: PropTypes.array.isRequired,
    onClickHero: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.fetchHeroes()
  }

  render () {
    const { currentId, heroes, onClickHero } = this.props
    return (
      <div>
        {heroes.map(({ image, name, id }) =>
          <Card
            key={id}
            image={image}
            name={name}
            selected={currentId === id}
            onClick={() => { currentId !== id && onClickHero(id) }}
          />
        )}
      </div>
    )
  }
}
