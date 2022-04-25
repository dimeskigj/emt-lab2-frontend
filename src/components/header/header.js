import React from 'react';
import { Link } from 'react-router-dom';

const header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container-fluid">
                <h3 className="text-muted">e-Library</h3>
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <Link className={"nav-link"} to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link"} to={'/books'}>Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link"} to={'/categories'}>Categories</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link"} to={'/books/add'}>Add Book</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default header;