import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../Header'
import History from '../History'
import App from '../App'

class Router extends React.Component {
  constructor() {
    super()
    this.state = {
      history: []
    }
  }
  
  render () {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/history">
            <History history={this.state.history} />
          </Route>
          <Route path="/">
            <App history={this.state.history}/>
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router
