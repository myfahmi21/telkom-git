import React from 'react';

class Repos extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        var url = `https://api.github.com/users/${this.props.params.username}/repos`;
        fetch(url)
        .then(response => response.json());
    }

    renderStat(stats) {
        return (
            <li key={this.id} className="user-info__stat">
                {this.name}
            </li>
        );
    }

    render() {
        if (!this.state.user) {
            return (<div className="user-page">Mengambil Data...</div>);
        }
        return (
            <div className="user-page">
                <div className="user-info">
                    {this.state.user.map(this.renderStat)}
                </div>
            </div>
        );
    }
};

export default Repos;