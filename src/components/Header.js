import React, { Component } from 'react';

class Header extends Component {
    render() {

        const Header = (
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
           <h1 className="header">Dog Information</h1>
          </nav>
        );

        return(
            <div>{Header}</div>
        )
    }
}

export default Header;
