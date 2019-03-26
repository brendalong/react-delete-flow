import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';


import NavBar from "./NavBar";

import AppViews from "./AppViews"


class Kennel extends Component {
  

    render() {
        return (
          <Router>
                <NavBar />
                <AppViews />
          </Router>
        );
    }
}


export default Kennel;
