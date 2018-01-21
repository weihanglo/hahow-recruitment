import React from 'react'
import PropTypes from 'prop-types'
import { Intent, Position, Toaster, Button } from '@blueprintjs/core'

import './style.css'

export default class UploadButton extends React.Component {
  static propTypes = {
    availablePoints: PropTypes.number.isRequired,
    isUploading: PropTypes.bool,
    uploadError: PropTypes.string,
    uploadProfile: PropTypes.func.isRequired
  }

  _toaster

  componentDidUpdate (prevProps, prevState) {
    const { isUploading, uploadError } = this.props
    const isUploaded = prevProps.isUploading !== isUploading
    if (isUploaded && this._toaster && !isUploading) {
      if (uploadError) {
        this._toaster.show({
          message: '儲存失敗',
          intent: Intent.DANGER
        })
      } else {
        this._toaster.show({
          message: '儲存成功',
          intent: Intent.SUCCESS
        })
      }
    }
  }

  render () {
    const {
      availablePoints,
      uploadProfile,
      isUploading
    } = this.props
    return (
      <div className='upload-button__container'>
        <div className='upload-button__save-group'>
          <p>剩餘點數：{availablePoints}</p>
          <Button
            onClick={uploadProfile}
            disabled={!!isUploading || availablePoints !== 0}
            intent={Intent.PRIMARY}
            loading={isUploading}
          >
            儲存
          </Button>
        </div>
        <Toaster
          position={Position.TOP_RIGHT}
          ref={ref => { this._toaster = ref }}
        />
      </div>
    )
  }
}
