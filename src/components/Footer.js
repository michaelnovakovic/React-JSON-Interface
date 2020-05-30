import React, { Component } from 'react';

class Footer extends Component {
    render() {

        const Footer = (
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom">
            <span className="footer">@ Michael Novakovic 2020. All Rights Reserved.</span>
          </nav>
        );

        return(
            <div>{Footer}</div>
        );
        
    }
}

export default Footer;
