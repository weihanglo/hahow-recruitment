import { connect } from 'react-redux'

import List from './List'

function mapStateToProps ({ heroes, currentId }) {
  return {
    currentId,
    heroes
  }
}

export default connect(
  mapStateToProps
)(List)
