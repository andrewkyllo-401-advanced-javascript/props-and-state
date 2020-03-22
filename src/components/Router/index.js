import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../Header'
import History from '../History'
import App from '../App'

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
