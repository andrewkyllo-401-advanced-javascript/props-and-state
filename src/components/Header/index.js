import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="Header">
      <h1>RESTy EASy</h1>
      <nav className="Menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/history">History</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header