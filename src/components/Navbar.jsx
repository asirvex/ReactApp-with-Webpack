import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
      <div className="my-2">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <Link className="navbar-brand" to={"/"}>
            My blog
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={"/"}>
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to={'/about'}>

                  About
              </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
}
