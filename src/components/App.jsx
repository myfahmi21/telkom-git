import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div className="main-app">
                <header className="main-header">
                    <img src="//www.telkom.co.id/images/logo_horizontal.svg" />
                    <h1>Telkom GitHub Explorer</h1>
                </header>
                <main className="main-content">
                    {this.props.children}
                </main>
            </div>
        );
    }
};

export default App;