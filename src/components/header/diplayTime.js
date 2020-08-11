import React from 'react';

class DisplayTime extends React.Component {

    render() {
        let dateCourante = new Date();
        let tempsJavaScript = dateCourante.getTime();
        let tempsPHP = tempsJavaScript/1000;

        return (
            <div>
                { this.props.format === "jsTime" &&
                    <p>
                        Temps JavaScript: {tempsJavaScript} millisecondes 
                    </p>
                }
                { this.props.format === "phpTime" &&
                    <p>
                        Temps PHP: {tempsPHP} secondes
                    </p>
                }
                { this.props.format === "humanTime" &&
                     <p>
                        Date pour un humain: {dateCourante.getDate()}/{dateCourante.getMonth()}/{dateCourante.getFullYear()}
                    </p>
                }
            </div>
        );
    }
}

export default DisplayTime;