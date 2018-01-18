import React from 'react'
import ReactDOM from 'react-dom'
// RxJS Observable operators
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'

import App from './App'

const container = document.querySelector('#hahow-app-root')

ReactDOM.render(<App />, container)
