import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './index.css';
 
class DeletarProduct extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            product: {},
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
 
        fetch(`${process.env.REACT_APP_API_URL}/${id}`)
            .then(data => {
                data.json().then(data => {
                    if (data.error) {
                        this.setState({ erro: data.error });
                    } else {
                        this.setState({ product: data });
                    }
                });
            })
            .catch(erro => this.setState({ erro: erro }));
    }
 
    render() {
        const { redirect } = this.state;
 
        if (redirect) {
            return <Redirect to="/products" />;
        } else {
            return (
                <div id="ctj" class="container">
                <div class="card">
                    <div class="card-header">
                    <h1>{this.state.product.name}</h1>
            </div>
                    <div class="card-body">
                        <h5 class="card-title">Costprice: {this.state.product.costprice} </h5>
                        <h5 class="card-title">Costsell: {this.state.product.costsell} </h5>
                        <h5 class="card-title">Stockamount: {this.state.product.stockamout} </h5>
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
 
        fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
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
 
export default DeletarProduct;