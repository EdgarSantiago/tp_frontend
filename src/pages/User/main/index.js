import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 
export default class Main extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            user: [],
            erro: null
        };
    }
 
    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}/laloja/users`)
            .then(user =>
                user.json().then(user => this.setState({ user }))
            )
            .catch(erro => this.setState({ erro }));
    }
 
    render() {
        const { user } = this.state;
 
        return (
            <div className="user-list">
                <Link to={`/criarUser`}> <button type="button" class="btn btn-warning">New</button> </Link>
                <br /><br />

 
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Adress</th>
                            <th scope="col">Number</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((user, index) => (
                            <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.adress}</td>
                                <td>{user.number}</td>
                                <td id="t123">{user.email}</td>
                                <td> <Link to={`/users/${user.id}`}> <button type="button" class="btn btn-dark">Details</button> </Link> </td>
                                <td> <Link to={`/editarUser/${user.id}`}> <button type="button" class="btn btn-warning">Update</button> </Link></td>
                                <td> <Link to={`/deletarUser/${user.id}`}> <button type="button" class="btn btn-danger">Delete</button> </Link></td>
                            </tr>
                        ))}  
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </tbody>
                </table>
            </div>
        )
    }
}
