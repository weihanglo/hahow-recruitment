import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchHeroes } from '../../actions/fetchHeroes'
import { fetchProfile } from '../../actions/fetchProfile'

import List from './List'

function mapStateToProps ({ heroes, currentId }) {
  return {
    currentId,
    fetching: heroes.fetching,
    heroes: heroes.heroes
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    fetchProfile,
    fetchHeroes
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
