import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { fetchHeroes } from '../../actions/fetchHeroes'
import { fetchProfile } from '../../actions/fetchProfile'
import { getHeroId } from '../../reducers/profile'

import List from './List'

function mapStateToProps (state) {
  return {
    currentId: getHeroId(state),
    fetching: state.heroes.fetching,
    heroes: state.heroes.heroes
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    fetchProfile,
    fetchHeroes,
    onClickHero: heroId => push(`/heroes/${heroId}`)
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
