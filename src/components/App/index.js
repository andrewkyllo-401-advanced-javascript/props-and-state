import React from 'react';
import './App.scss';
import Results from '../Results'
// import { render } from 'sass';

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/'

class App extends React.Component {
  constructor () {
    super() 
    this.state = {
      URL: '',
      results: [],
      method: 'GET'
    }
  }

 handleSubmit(event) {
   event.preventDefault()
 }
  

  getDataApi = async () => {
    await this.setState({ URL: this.refs.URLInput.value, method: this.refs.methodSelect.value})
    const raw = await fetch(this.state.URL, { method: this.state.method })
    const data = await raw.json()
    this.setState({
      results: data.results
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
        {(this.state.results.length) 
        ? <Results content={this.state.results}/>
        : null
        }
      </div>
    );
  }
}

export default App;
