import React, { Component } from 'react';

class Header extends Component {
    render() {

        const Header = (
          <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <span class="navbar-text">Find A Doggy</span>
          </nav>
        );

        return(
            <div>{Header}</div>
        )
    }
}

export default Header;
