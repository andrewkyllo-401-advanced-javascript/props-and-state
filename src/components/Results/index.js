import React from 'react'


class Results extends React.Component {
  render () {
    return (
      <ul>
        {this.props.content.map(object => {
          return (
            <li key={object.name}>
              <a href={object.url}>{object.name}</a>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Results;