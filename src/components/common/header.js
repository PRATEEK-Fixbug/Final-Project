import React from 'react';
import { NavLink } from "react-router-dom"; // Import NavLink

class Header extends React.Component {
    handleClick = () => {
        // Add your click event handling logic here
    };

    render() {
        return (
            <header className="header">
                <div className="header-left">
                    <button className="menu-icon" onClick={this.handleClick}>
                        ☰
                    </button>
                    <div className="header-buttons">
                       <NavLink to="/" activeClassName="active"><button className="header-button">Home</button></NavLink>
                       <NavLink to="/Portfolio" activeClassName="active"><button className="header-button">Portfolio</button></NavLink>
                       <NavLink to="/help" activeClassName="active"><button className="header-button">Help</button></NavLink>
                       <NavLink to="/knowmore" activeClassName="active"><button className="header-button">Know more</button></NavLink>
                    </div>
                </div>
                <div className="header-right">
                    <NavLink to="/LoginPage" activeClassName="active"><button className="header-button">Login</button></NavLink>
                    <button className="user-icon">
                        <img src="https://tse3.mm.bing.net/th?id=OIP.HHVUf3TYqncgpJXyCMmxyAHaHa&pid=Api&P=0&h=180" alt="User Icon" />
                    </button>
                </div>
                       
       
            </header>
        );
    }
}

export default Header;
