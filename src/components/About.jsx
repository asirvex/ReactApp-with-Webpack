import {Link} from 'react-router-dom'
import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <main role="main">
          <div className="jumbotron">
            <div className="container">
              <h1 className="display-3">About this app</h1>
              <p>
                This is a simple React App that has been setup using Webpack...
                stry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset she
              </p>
              <p>
                <Link className="btn btn-primary btn-lg" to={'/'} role="button">
                  back Home
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
