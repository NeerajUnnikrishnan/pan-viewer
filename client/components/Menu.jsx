import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        return (
         <div>
          <a href="/plan.html" style={{margin: "10px"}}  className="btn btn-primary btn-sm">Live Plan</a>
          <a href="/stage.html" style={{margin: "10px"}} className="btn btn-primary btn-sm">Stage Performance</a>
        </div>
        );
    }
}