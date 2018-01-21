import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '@blueprintjs/core'

export default class HeroCard extends React.PureComponent {
  static propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    selected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  }

  render () {
    const { image, name, onClick, selected } = this.props
    let className = 'hero-list__card'
    if (selected) {
      className += ` ${className}--selected`
    }
    return (
      <div className='hero-list__card-container'>
        <Card
          interactive
          elevation={selected ? 3 : 0}
          onClick={onClick}
          className={className}
        >
          <img src={image} />
          <h4>{name}</h4>
        </Card>
      </div>
    )
  }
}
