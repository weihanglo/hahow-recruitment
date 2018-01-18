import { connect } from 'react-redux'

import Profile from './Profile'

function mapStateToProps ({ profile }) {
  return {
    profile: profile.profile,
    fetching: profile.fetching
  }
}

export default connect(
  mapStateToProps
)(Profile)
