import React from 'react';
import DemoComponent from '../demoComponent';
import logo from './logo.svg';
import Navigation from './navigation';
import DisplayTime from './diplayTime';

class Header extends React.Component {
    
    currentPage = "heure";


    render() {
        return (
            <header className="App-header">
                <Navigation/>
                <img src={logo} className="App-logo" alt="logo" />
                {this.currentPage}
                { this.currentPage == "accueil" &&
                    <DemoComponent/>
                }
                { this.currentPage == "heure" &&
                    <DisplayTime format="phpTime"/>
                }            
            </header>
        );
    }
}

export default Header;