import React from 'react';
import './App.scss';
import Results from '../Results'
import { If, Unless, When } from '../Conditionals'
// import { render } from 'sass';

// const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/'

class App extends React.Component {
  constructor () {
    super() 
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.props.handleSubmit}>
            <input onChange={this.props.handleInput} type="text" name="URL" placeholder="Type in API URL here"/>
            <select value={this.state.value} onChange={this.props.handleSelection}>
              <option value="GET">GET</option>
              <option value="PUT">PUT</option>
              <option value="POST">POST</option>
              <option value="DELETE">DELETE</option>
            </select>
          <button onClick={this.props.getDataApi} >Lets Go!</ button>
        </form>
        <When condition={this.props.loading}>
          Loading!!!!!!!!!!!!!!!!!!!!!
        </When>
        <Unless condition={this.props.results !== 0}>
          <p className="error">No results!</p>
        </Unless>
        <If condition={this.props.results !== null}>
          <Results response={this.props.results} headers={this.props.headers} />
        </If>
      </div>
    );
  }
}

export default App;
