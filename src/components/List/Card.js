import React from 'react'
import PropTypes from 'prop-types'

export default class Card extends React.PureComponent {
  static propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    selected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  }

  render () {
    const { image, name, onClick } = this.props
    return (
      <div onClick={onClick}>
        <img src={image} />
        <h4>{name}</h4>
      </div>
    )
  }
}
