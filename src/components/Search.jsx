import React from 'react';
import { browserHistory as history } from 'react-router';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    _handleSubmit(e) {
        e.preventDefault();
        history.push(`/user/${this.refs.userInput.value}`)
    }
    render() {
        return (
            <div className="search-page">
                <p>Masukan Username GitHub</p>
                <form onSubmit={this._handleSubmit}>
                    <input ref="userInput" className="search-page__input" type="text" value="facebook" />
                    <button className="search-page__button">Cari</button>
                </form>
            </div>
        );
    }
};

export default Search;