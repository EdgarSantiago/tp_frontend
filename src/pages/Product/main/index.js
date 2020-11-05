import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 
export default class Main extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            product: [],
            erro: null
        };
    }
 
    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}/laloja/products`)
            .then(product =>
                product.json().then(product => this.setState({ product }))
            )
            .catch(erro => this.setState({ erro }));
    }
 
    render() {
        const { product } = this.state;
 
        return (
            
            <div className="container product-list">
                <Link to={`/criarproduct`}> <button type="button" class="btn btn-danger">New</button> </Link>
                <br /><br />

 
                <table class="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">CostPrice</th>
                            <th scope="col">CostSell</th>
                            <th scope="col">Stockamout</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((product, index) => (
                            <tr>
                                <th scope="row">{product.id}</th>
                                <td>{product.name}</td>
                                <td>{product.costprice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                <td>{product.costsell.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                <td id="t123">{product.stockamout.toLocaleString('pt-BR')}</td>
                                <td> <Link to={`/products/${product.id}`}> <button type="button" class="btn btn-dark">Details</button> </Link> </td>
                                <td> <Link to={`/editarProduct/${product.id}`}> <button type="button" class="btn btn-warning">Update</button> </Link></td>
                                <td> <Link to={`/deletarProduct/${product.id}`}> <button type="button" class="btn btn-danger">Delete</button> </Link></td>
                            </tr>
                        ))}  
                      
                    </tbody>
                </table>
            </div>
        )
    }
}
