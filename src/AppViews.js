import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './AnimalList'
// import LocationList from './LocationList'
import EmployeeList from './EmployeeList';
import APIManager from './db-calls';
import AnimalDetail from './AnimalDetail'


class AppViews extends Component {
    state = {
        employees: [],
        locations: [],
        animals: []
      }

      deleteAnimal = id => {
          console.log("delete animal", id);
        APIManager.deleteAnimal(id)
        .then(() => APIManager.getAll("animals")
        .then((animals) => {
            console.log("here now", animals);
            this.setState({
            animals: animals
            })
        })
      )
    }
    
    //   componentDidMount(){
    //     APIManager.getAll("employees")
    //     .then(data => 
    //       this.setState({
    //       employees: data,
    //     }))
    //     APIManager.getAll("animals")
    //     .then(data => 
    //       this.setState({
    //         animals: data,
    //     }))
    //   }
//try this one - cleaner
      componentDidMount(){
        APIManager.getAll("employees")
        .then(employees => newState.employees = employees)
        .then(() => APIManager.getAll("animals")
        .then(animals => newState.animals = animals)
        .then(() =>
          this.setState(newState))
      }
    
      

    render() {
        return (
            <React.Fragment>
                
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} deleteAnimal={this.deleteAnimal} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
            </React.Fragment>
        )
    }
}

export default AppViews