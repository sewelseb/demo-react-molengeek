import React from 'react';
import DemoComponent from '../demoComponent';
import logo from './logo.svg';
import Navigation from './navigation';
import DisplayTime from './diplayTime';

class Header extends React.Component {
    
    currentPage = "heure";

    state = {
        formatTime : "phpTime"
    }

    onNavigationParent = (destination) => {
        this.currentPage = destination;
        console.log(this.currentPage);
    }

    handleClick = (format) => {
        console.log(format);
        this.setState({
            formatTime : format
        });
    }

    render() {
        return (
            <header className="App-header">
                <Navigation onNavigation={this.onNavigationParent}/>
                <img src={logo} className="App-logo" alt="logo" />
                {this.currentPage}
                { this.currentPage == "accueil" &&
                    <DemoComponent/>
                }
                { this.currentPage == "heure" &&
                    <div>
                        <DisplayTime format={this.state.formatTime} />
                        <button onClick={() => this.handleClick('jsTime')}>JavaScript</button>
                        <button onClick={() => this.handleClick('phpTime')}>PHP</button>
                        <button onClick={() => this.handleClick('humanTime')}>Humain</button>
                    </div>
                }            
            </header>
        );
    }
}

export default Header;