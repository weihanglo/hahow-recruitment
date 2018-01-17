import React from 'react'
import PropTypes from 'prop-types'

export default class Card extends React.PureComponent {
  static propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    selected: PropTypes.bool.isRequired
  }

  render () {
    const { image, name, selected } = this.props
    return (
      <div>
        <img src={image} />
        {selected ? <h1>{name}</h1> : <h4>{name}</h4>}
      </div>
    )
  }
}
