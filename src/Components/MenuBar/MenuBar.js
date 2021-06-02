import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Communication StoreHouse
                </Link>
                <div>
                    <a href="#" ></a>
                    <Link to="/contacts/add" className="btn btn-light ml-auto">
                    Create Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default MenuBar;