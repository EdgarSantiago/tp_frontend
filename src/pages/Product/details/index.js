import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../details/index.css';

export default class Product extends Component {
    state = {
        product: {},
    };

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`${process.env.REACT_APP_API_URL}/${id}`)
            .then(product =>
                product.json().then(product => this.setState({ product }))
            )
            .catch(erro => this.setState({ erro }));
    }

    render() {
        // eslint-disable-next-line 
        const { product, index } = this.state;

        return (
            <div id="ctj" class="container">
                <div class="card">
                    <div class="card-header">
                    <h1>{product.name}</h1>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Costprice: {product.costprice}</h5>
                        <h5 class="card-title">Costsell: {product.costsell}</h5>
                        <h5 class="card-title">Stockamount: {product.stockamout}</h5>
                        
                        <p>Product details</p>
                        <Link to={`/Products`}> <button type="button" class="btn btn-warning">Voltar</button> </Link>
                        <Link to={`/deletarProduct/${product.id}`}> <button type="button" class="btn btn-danger">Delete</button> </Link>
                    </div>
                </div>
            </div>
        );
    }
}
