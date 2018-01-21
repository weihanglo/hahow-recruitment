import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'
import './style.css'

export default class List extends React.PureComponent {
  static propTypes = {
    currentId: PropTypes.string,
    fetchHeroes: PropTypes.func.isRequired,
    heroes: PropTypes.array.isRequired,
    onClickHero: PropTypes.func.isRequired,
    clearProfile: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.fetchHeroes()
  }

  render () {
    const { currentId, heroes, onClickHero, clearProfile } = this.props
    return (
      <div className='hero-list__container'>
        {heroes.map(({ image, name, id }) =>
          <Card
            key={id}
            image={image}
            name={name}
            selected={currentId === id}
            onClick={() => {
              currentId !== id
                ? onClickHero(id)
                : clearProfile()
            }}
          />
        )}
      </div>
    )
  }
}
