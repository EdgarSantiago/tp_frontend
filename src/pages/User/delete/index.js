import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './index.css';
 
class DeletarUser extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            user: {},
            erro: null,
            redirect: false
        };
    }
 
    exibeErro() {
        const { erro } = this.state;
 
        if (erro) {
            return (
                <div className="alert alert-danger" role="alert">
                    Erro de conexão com o servidor
                </div>
            );
        }
    }
 
    componentDidMount() {
        const { id } = this.props.match.params;
 
        fetch(`${process.env.REACT_APP_API_URL}/laloja/users/${id}`)
            .then(data => {
                data.json().then(data => {
                    if (data.error) {
                        this.setState({ erro: data.error });
                    } else {
                        this.setState({ user: data });
                    }
                });
            })
            .catch(erro => this.setState({ erro: erro }));
    }
 
    render() {
        const { redirect } = this.state;
 
        if (redirect) {
            return <Redirect to="/users" />;
        } else {
            return (
                <div id="ctj" class="container">
                <div class="card">
                    <div class="card-header">
                    <h1>{this.state.user.name}</h1>
            </div>
                    <div class="card-body">
                        <h5 class="card-title">Adress: {this.state.user.adress} </h5>
                        <h5 class="card-title">Email: {this.state.user.email} </h5>
                        <h5 class="card-title">Number: {this.state.user.number} </h5>
                        <p>Tem certeza que deseja deletar este registro?</p>
                        <button type="button" class="btn btn-danger" onClick={this.handleClick}>
                            Remover
                        </button>
                    </div>
                </div>
            </div>
            );
        }
    }
 
    handleClick = event => {
        const { id } = this.props.match.params;
 
        fetch(`${process.env.REACT_APP_API_URL}/users/${id}`, {
            method: "delete"
        })
            .then(data => {
                if (data.ok) {
                    this.setState({ redirect: true });
                } else {
                    data.json().then(data => {
                        if (data.error) {
                            this.setState({ erro: data.error });
                        }
                    });
                }
            })
            .catch(erro => this.setState({ erro: erro }));
 
        event.preventDefault();
    };
}
 
export default DeletarUser;