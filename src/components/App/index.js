import React from 'react';
import './App.scss';
import Results from '../Results'
import { If, Unless, When } from '../Conditionals'
// import { render } from 'sass';

// const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/'

class App extends React.Component {
  constructor () {
    super() 
    this.state = {
      headers: [],
      URL: '',
      results: null,
      method: 'GET',
      loading: false,
    }
  }

 handleSubmit(event) {
   event.preventDefault()
 }
  

  getDataApi = async () => {
    await this.setState({ URL: this.refs.URLInput.value, method: this.refs.methodSelect.value })
    this.props.history.push({URL: this.state.URL, method: this.state.method})
    this.setState({loading: true})
    const raw = await fetch(this.state.URL, { method: this.state.method })
    this.setState({loading:false})
    const data = await raw.json()
    this.setState({
      results: data,
      headers: [...raw.headers.entries()],
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
            <input ref="URLInput" value={this.state.value} type="text" name="URL" placeholder="Type in API URL here"/>
            <select ref="methodSelect">
              <option defaultValue="get">GET</option>
              <option value="put">PUT</option>
              <option value="post">POST</option>
              <option value="delete">DELETE</option>
            </select>
          <button onClick={this.getDataApi} >Lets Go!</ button>
        </form>
        <When condition={this.state.loading}>
          Loading!!!!!!!!!!!!!!!!!!!!!
        </When>
        <Unless condition={this.state.results !== 0}>
          <p className="error">No results!</p>
        </Unless>
        <If condition={this.state.results !== null}>
          <Results response={this.state.results} headers={this.state.headers} />
        </If>
      </div>
    );
  }
}

export default App;
