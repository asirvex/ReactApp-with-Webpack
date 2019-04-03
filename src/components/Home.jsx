import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import "./Home.css"

export default class Home extends Component {
  render() {
    return (
      <div  className="bordered">
        <form className="form-signin w-50 mx-auto">
          <div className="text-center mb-4">
            <img
              className="mb-4"
              src="/docs/4.3/assets/brand/bootstrap-solid.svg"
              alt=""
              width="72"
              height="72"
            />
            <h1 className="h3 mb-3 font-weight-normal">Login</h1>
            <p>
              React is a javascript library that is used to write components. It was developed by facebook. It can be used to render components on different targets.
            </p>
          </div>

          <div className="form-label-group">
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
              autofocus
            />
            <label for="inputEmail">Email address</label>
          </div>

          <div className="form-label-group">
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
            />
            <label for="inputPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <Link to={'/about'}>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
            </Link>
          <p className="mt-5 mb-3 text-muted text-center">&copy; 2019</p>
        </form>
      </div>
    );
  }
}
