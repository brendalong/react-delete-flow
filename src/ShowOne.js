import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class ShowOne extends Component {

    // handleClick = (event) => {
    //     console.log("click", event.target.id);
    //     this.props.callGetOnePost(event.target.id);
    // }

    render(){

        return(
                <React.Fragment>
                    <h2>Hello ShowOne</h2>
                </React.Fragment>
             );
    }
}

export default ShowOne;