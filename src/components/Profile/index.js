import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchProfile } from '../../actions/fetchProfile'
import {
  decreaseAbility,
  increaseAbility
} from '../../actions/updateProfile'
import {
  getAvailablePoints,
  getCounterEnabled,
  getProfile,
  getProfileFetchState,
  getHeroId
} from '../../reducers/profile'
import Profile from './Profile'

function mapStateToProps (state) {
  return {
    availablePoints: getAvailablePoints(state),
    counterEnabled: getCounterEnabled(state),
    currentId: getHeroId(state),
    fetching: getProfileFetchState(state),
    profile: getProfile(state)
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    fetchProfile,
    onDecrease: decreaseAbility,
    onIncrease: increaseAbility
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
