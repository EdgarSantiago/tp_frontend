import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './index.css';

class EditarProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {
                name: "",
                costprice: "",
                costsell: "",
                stockamout: ""
            },
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

        fetch(`${process.env.REACT_APP_API_URL}/laloja/products/${id}`)
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
<div id="ct13" className="container d-flex justify-content-center">
                <div className="container" class="add-product bg-light shadow-lg p-3 mb-5 bg-white rounded ">
                    <div className="container d-flex justify-content-center">
                    <form onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend>Edit product</legend>
                            <div className="product-insert">
                                <br />
                                <input class="form-control mr-sm-2"
                                    type="text"
                                    aria-label="Name"
                                    id="name"
                                    name="name"
                                    placeholder="name"
                                    minLength="1"
                                    maxLength="100"
                                    required
                                    value={this.state.product.name}
                                    onChange={this.handleInputChange}></input>
                            </div>
                            <div className="product-insert">
                                <br />
                                <input class="form-control mr-sm-2"
                                    type="text"
                                    aria-label="costprice"
                                    id="costprice"
                                    name="costprice"
                                    placeholder="costprice"
                                    minLength="1"
                                    maxLength="100"
                                    required
                                    value={this.state.product.costprice}
                                    onChange={this.handleInputChange}></input>
                            </div>
                            <div className="product-insert">
                                <br />
                                <input class="form-control mr-sm-2"
                                    type="text"
                                    aria-label="costsell"
                                    id="costsell"
                                    name="costsell"
                                    placeholder="costsell"
                                    minLength="1"
                                    maxLength="100"
                                    required
                                    value={this.state.product.costsell}
                                    onChange={this.handleInputChange}></input>
                            </div>

                            <div className="product-insert">
                                <br />
                                <input class="form-control mr-sm-2"
                                    type="text"
                                    aria-label="stockamout"
                                    id="stockamout"
                                    name="stockamout"
                                    placeholder="stockamout"
                                    minLength="1"
                                    maxLength="100"
                                    required
                                    value={this.state.product.stockamout}
                                    onChange={this.handleInputChange}></input>
                            </div>
                            <br></br>
                            <div class="btn1 d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">
                                Append

                    </button>
                    </div>
                        </fieldset>
                    </form>
                    </div>
                </div>
                </div>
            );
        }
    }



    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            product: { ...prevState.product, [name]: value }
        }));
    };

    handleSubmit = event => {
        const { id } = this.state.product;

        fetch(`${process.env.REACT_APP_API_URL}/laloja/products/${id}`, {
            method: "put",
            body: JSON.stringify(this.state.product),
            headers: {
                "Content-Type": "application/json"
            }
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

export default EditarProduct;