import React from 'react'
import PropTypes from 'prop-types'

export default class UploadButton extends React.Component {
  static propTypes = {
    availablePoints: PropTypes.number.isRequired,
    isUploading: PropTypes.bool,
    uploadError: PropTypes.string,
    uploadProfile: PropTypes.func.isRequired
  }

  _renderUploadMessage () {
    const { isUploading, uploadError } = this.props
    if (uploadError) {
      return <p>儲存失敗</p>
    }

    if (isUploading) {
      return <p>儲存中...</p>
    }
  }

  render () {
    const { availablePoints, uploadProfile, isUploading } = this.props
    return (
      <div>
        {this._renderUploadMessage()}
        <p>剩餘點數：{availablePoints}</p>
        <button
          onClick={uploadProfile}
          disabled={!!isUploading || availablePoints !== 0}
        >
          儲存
        </button>
      </div>
    )
  }
}
