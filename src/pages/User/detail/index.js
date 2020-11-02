import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../detail/index.css';

export default class User extends Component {
    state = {
        user: {},
    };

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`${process.env.REACT_APP_API_URL}/laloja/users/${id}`)
            .then(user =>
                user.json().then(user => this.setState({ user }))
            )
            .catch(erro => this.setState({ erro }));
    }

    render() {
        // eslint-disable-next-line 
        const { user, index } = this.state;

        return (
            <div id="ctj" class="container">
                <div class="card">
                    <div class="card-header">
                    <h1>{user.name}</h1>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Adress: {user.adress}</h5>
                        <h5 class="card-title">Email: {user.email}</h5>
                        <h5 class="card-title">Number: {user.number}</h5>
                        
                        <p>user details</p>
                        <Link to={`/users`}> <button type="button" class="btn btn-warning">Voltar</button> </Link>
                        <Link to={`/deletaruser/${user.id}`}> <button type="button" class="btn btn-danger">Delete</button> </Link>
                    </div>
                </div>
            </div>
        );
    }
}
