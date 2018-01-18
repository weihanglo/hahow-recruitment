import React from 'react'
import PropTypes from 'prop-types'

export default class Card extends React.PureComponent {
  static propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func,
    selected: PropTypes.bool.isRequired
  }

  render () {
    const { image, name, selected, onClick } = this.props
    return (
      <div onClick={onClick}>
        <img src={image} />
        {selected ? <h1>{name}</h1> : <h4>{name}</h4>}
      </div>
    )
  }
}
