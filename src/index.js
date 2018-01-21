// Shim only
import 'core-js/shim'
import React from 'react'
import ReactDOM from 'react-dom'
// RxJS Observable operators
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mapTo'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/filter'
// Bluprint.js UI framework stylesheet
import '@blueprintjs/core/lib/css/blueprint.css'

import App from './App'

const container = document.querySelector('#hahow-app-root')

ReactDOM.render(<App />, container)
