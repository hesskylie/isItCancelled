import React from 'react'

import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <span>Key: </span>
        <span className="ongoingKey">ongoing</span>
        <span className="remoteKey">remote</span>
        <span className="pendingKey">pending</span>
        <span className="postponedKey">postponed</span>
        <span className="cancelledKey">cancelled</span>
      </div>
      <Routes />
      <div>
        Disclaimer: This website tracks some of the events that have been
        cancelled due to the coronavirus disease (COVID-19), along with other
        things that have been incidentally cancelled. It is not meant to be a
        comprehensive resource.
      </div>
    </div>
  )
}

export default App
