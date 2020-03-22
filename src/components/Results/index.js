import React from 'react'


class Results extends React.Component {
  render () {
    return (
      <div className="Headers" >
        Headers: 
                {this.props.headers.map(header => {
          return (
            <li key={header}>
              <span>{header}</span>
            </li>
          )
        })}
        <p>Count: {JSON.stringify(this.props.count)}</p>
        Results: 
        {this.props.response.map(object => {
          return (
            <li key={object.name}>
              <a href={object.url}>{object.name}</a>
            </li>
          )
        })}
      </div>
    )
  }
}

export default Results;