import React from 'react';
import './header.css';
const Header = () => (
    <div className="container-fluid ">
        <ul class="nav justify-content-center ">
            <li class="nav-item">
                <a class="nav-link text-dark" href="/products">Products</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="/users">Users</a>
            </li>
           
        </ul>
    </div>
);

export default Header; 