import React, { Component } from "react";
import { Route } from 'react-router-dom';
import AnimalList from './AnimalList';
import EmployeeList from './EmployeeList';
import AnimalDetail from './AnimalDetail';

class AppViews extends Component {
    state = {
        auth: false,
      }
      componentDidMount(){
        
      }

    //couple of notes for below
    //test out adding exact to the /animals and then removing
    //notice how clicking on specific animal will either display or not the animal list

    //add/remove {...props} to animals/ route. notice how router info is passed along.

    render() {
        return (
            <React.Fragment>

                <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList />
                }} />
            </React.Fragment>
        )
    }
}

export default AppViews