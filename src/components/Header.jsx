import React from 'react';

const Header = ({setCurrentPage}) => {

    const pages = [
        {name : "Home", label : "Home"},
        {name : "AboutMe", label : "About me"},
        {name : "StarWars", label : "Star Wars"},
        {name : "Contact", label : "Contact"}
    ]

    return (
        <header>
            <nav className="fixed-top mt-2 ms-5">
                <ul className="nav">
                    {pages.map((page,i) => {
                        return (
                            <li className="nav-item btn btn-danger mx-1" key={i} onClick={() => setCurrentPage(page.name)}>{page.label}</li>
                        )
                    })}
                </ul>
            </nav>
            <p className="text-center py-4 h1">Luke Skywalker</p>
        </header>
    );
};

export default Header;