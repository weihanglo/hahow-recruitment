import { connect } from 'react-redux'

import Profile from './Profile'

function mapStateToProps ({ abilities }) {
  return {
    abilities: abilities.abilities,
    fetching: abilities.fetching
  }
}

export default connect(
  mapStateToProps
)(Profile)
