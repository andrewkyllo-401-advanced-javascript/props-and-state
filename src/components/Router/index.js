import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../Header'
import History from '../History'
import App from '../App'

class Router extends React.Component {
  constructor() {
    super()
    this.state = {
      history: [],
      headers: [],
      URL: '',
      results: null,
      method: 'GET',
      loading: false,
    }
  }

  handleSelection = async event => {
    await this.setState({
      method: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  handleInput = async event => {
    await this.setState({
      URL: event.target.value
    })
  }


  getDataApi = async () => {
    // if (!this.state.history.find({URL: this.state.URL, method: this.state.method})) {
      await this.setState({ history: [...this.state.history, {URL: this.state.URL, method: this.state.method}] })
    // }
    this.setState({loading: true})
    const raw = await fetch(this.state.URL, { method: this.state.method })
    this.setState({loading:false})
    const data = await raw.json()
    this.setState({
      results: data,
      headers: [...raw.headers.entries()],
    })
  }
  render () {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/history">
            <History history={this.state.history} getDataApi={this.getDataApi} />
          </Route>
          <Route path="/">
            <App loading={this.state.loading} results={this.state.results} headers={this.state.headers} handleSelection={this.handleSelection} URL={this.state.URL} handleInput={this.handleInput} handleSubmit={this.handleSubmit} getDataApi={this.getDataApi}/>
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router
