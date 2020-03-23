import React from 'react'

class History extends React.Component {
  render() {
    return (
      <div className="history">
        {this.props.history.map(command => {
            return (
              <li key={command.URL}>
                <span >Method: {command.method} URL: {command.URL}</span>
                <button>Send It!</button>
              </li>
            )
          })}
      </div>
    )
  }
}

export default History