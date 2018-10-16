// import React from "react"
// import App from "../components/App"
//
// export default () => (
//   <App>
//     <p>Index Page</p>
//   </App>
// )

import React from 'react'
import {connect} from 'react-redux'
import {startClock, serverRenderClock} from '../store'

import App from '../components/App'
import Examples from '../components/Example'

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    if (!isServer) {
      reduxStore.dispatch(serverRenderClock(isServer))
    }
    return {}
  }

  componentDidMount () {
    const {dispatch} = this.props
    this.timer = startClock(dispatch)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <App>
        <>
          <p>Index Page</p>
          <Examples />
        </>
      </App>
    )
  }
}

export default connect()(Index)
