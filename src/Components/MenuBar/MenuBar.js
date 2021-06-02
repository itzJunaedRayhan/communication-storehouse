import React from 'react';

const MenuBar = () => {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <a href="#" className="navbar-brand">Communication StoreHouse</a>
                <div>
                    <a href="#" className="btn btn-light ml-auto">Create Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default MenuBar;