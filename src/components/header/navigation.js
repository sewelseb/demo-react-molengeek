import React from 'react';
import './navigation.css';

class Navigation extends React.Component {

    navigation = (desination) => {
        console.log("navigation vers " + desination);
    }

    render() {
        return (
            <nav>
                <button onClick={() => this.navigation('accueil')}>Accueil</button>
                <button onClick={() => this.navigation('heure')}>Heure</button>
                <button onClick={() => this.navigation('configuration')}>Configuration</button>
            </nav>
        );
    }
}

export default Navigation;