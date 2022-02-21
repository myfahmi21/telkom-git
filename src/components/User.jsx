import React from 'react';
import { Link } from 'react-router';

class User extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        var url = `https://api.github.com/users/${this.props.params.username}`;
        fetch(url)
        .then(response => response.json())
        .then(
            user => {
                this.setState({
                    user: user
                });
            }
        );
    }

    renderStat(stat) {
        return (
            <li key={stat.name} className="user-info__stat">
                <Link to={stat.url}>
                    <p className="user-info__stat-value">{stat.value}</p>
                    <p className="user-info__stat-name">{stat.name}</p>
                    <div className="button-lihat">Lihat Repository</div>
                </Link>
            </li>
        );
    }

    render() {
        if (!this.state.user) {
            return (<div className="user-page">Mengambil Data...</div>);
        }

        const user = this.state.user;

        const stats = [
            {
                name: 'Public Repos',
                value: user.public_repos,
                url: `/user/${this.props.params.username}/repos`
            }
        ];

        return (
            <div className="user-page">
                <div className="user-info">
                    <Link className="user-info__text" to={`/user/${user.login}`}>
                        <img className="user-info__avatar" src={user.avatar_url} alt={`${user.login} avatar`}/>
                        <h2 className="user-info__title">{user.login} ({user.name})</h2>
                        <p className="user-info__bio">{user.bio}</p>
                    </Link>
                    <div>
                        <ul className="user-info__stats">
                            {stats.map(this.renderStat)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};

export default User;