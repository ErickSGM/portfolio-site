import React from 'react';

import logo from '../img/logo.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-dark has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="coding"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered">
          <div className="container has-background-black">
            <div className="columns">
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
