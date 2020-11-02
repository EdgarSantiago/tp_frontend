import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// products
import MainProduct from './pages/Product/main';
import DetalhesProduct from './pages/Product/details';
import CriarProduct from './pages/Product/insert';
import EditarProduct from './pages/Product/edit'
import DeletarProduct from './pages/Product/delete';

// users

import MainUser from './pages/User/main';
import InserUser from './pages/User/inser';
import EditarUser from './pages/User/edit'
import DetalhesUser from './pages/User/detail';
import DeletarUser from './pages/User/delete';

const Routes = () => (
 
    <BrowserRouter>
        <Switch>
            <Route exact path="/products" component={MainProduct} />
            <Route path="/Products/:id" component={DetalhesProduct} />
            <Route path="/criarProduct" component={CriarProduct} />
            <Route path="/editarProduct/:id" component={EditarProduct} />
            <Route path="/deletarProduct/:id" component={DeletarProduct} />
            
            <Route exact path="/users" component={MainUser} />
            <Route path="/criarUser" component={InserUser} />
            <Route path="/editarUser/:id" component={EditarUser} />
            <Route path="/users/:id" component={DetalhesUser} />
            <Route path="/deletarUser/:id" component={DeletarUser} />
        </Switch>
    </BrowserRouter>
)
 
export default Routes;