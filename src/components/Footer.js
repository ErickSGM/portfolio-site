import React from 'react';

import logo from '../img/picklerick.png';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-dark has-text-white-ter">
        <p className="has-text-centered is-size-4">Sometimes science is more art than science, Morty. Lot of people don't get that. <wbr/> - Rick Sanchez</p>
        <div className="has-text-centered">
          <img
            src={logo}
            alt="coding"
            style={{ width: '10em', height: '10em' }}
          />
        </div>
      </footer>
    )
  }
}

export default Footer
