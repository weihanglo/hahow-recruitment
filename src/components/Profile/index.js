import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  decreaseAbility,
  increaseAbility
} from '../../actions/updateProfile'
import {
  getAvailablePoints,
  getCounterEnabled,
  getProfile,
  getProfileFetchState
} from '../../reducers/profile'
import Profile from './Profile'

function mapStateToProps (state) {
  return {
    availablePoints: getAvailablePoints(state),
    counterEnabled: getCounterEnabled(state),
    fetching: getProfileFetchState(state),
    profile: getProfile(state)
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    onDecrease: decreaseAbility,
    onIncrease: increaseAbility
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
