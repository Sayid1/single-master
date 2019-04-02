import React from 'react'
import { navigateToUrl } from 'single-spa'

export default () => (
  <nav>
    <div className="nav-wrapper">
      <a className="brand-logo">single-spa</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href='/' onClick={navigateToUrl}>Home</a></li>
        <li><a href='/angular' onClick={navigateToUrl}>AngularJS</a></li>
      </ul>
    </div>
  </nav>
)
