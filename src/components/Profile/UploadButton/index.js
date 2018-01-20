import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { uploadProfile } from '../../../actions/uploadProfile'
import { getAvailablePoints } from '../../../reducers/profile'
import {
  getUploading,
  getUploadError
} from '../../../reducers/uploadState'
import UploadButton from './UploadButton'

function mapStateToProps (state) {
  return {
    availablePoints: getAvailablePoints(state),
    isUploading: getUploading(state),
    uploadError: getUploadError(state)
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    uploadProfile
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadButton)
