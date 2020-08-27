import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li class="nav-item active">
                            <a className="nav-link" href="#">Courses</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0 ml-auto">
                        <input className="form-control mr-sm-2 border-rounded " type="search" placeholder="Search your course" aria-label="Search" />
                        <i class="fas fa-search"></i>

                    </form>
                    <button className="btn btn-outline-success ml-auto">LOG IN</button>
                    <button className="btn btn-primary ml-4">SIGN UP</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;