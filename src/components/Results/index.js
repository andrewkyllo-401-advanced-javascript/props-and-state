import React from 'react'
import ReactJson from 'react-json-view'


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
        Results: 
        <ReactJson src={this.props.response} />
      </div>
    )
  }
}

export default Results;
  // {this.props.response.map(object => {
  //   return (
  //     <li key={object.name}>
  //       <a href={object.url}>{object.name}</a>
  //     </li>
  //   )
  // })}