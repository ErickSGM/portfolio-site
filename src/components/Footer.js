import React from 'react';

import logo from '../img/logo.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-dark has-text-white-ter">
        <div className="has-text-centered">
          <img
            src={logo}
            alt="coding"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
      </footer>
    )
  }
}

export default Footer
