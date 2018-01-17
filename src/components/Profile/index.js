import { connect } from 'react-redux'

import Profile from './Profile'

function mapStateToProps ({ abilities }) {
  return {
    abilities
  }
}

export default connect(
  mapStateToProps
)(Profile)
