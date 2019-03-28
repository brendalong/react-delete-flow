import React, { Component } from 'react'
import {Redirect, Link} from 'react-router-dom';
import APIManager from './db-calls';


export default class AnimalDetail extends Component {
    //two options
    //1. render based on object passed in via location
    //2. make call to get single item, based on url param id

    //to think about
        // a anchor tag. href is hypertext reference. Means to go somewhere
        // button - means to have interactivity
        //react-router Link renders an <a></a> with extras - automatically knows where your components are and can adjust the style of a link to make it look active when it's the page the user is currently browsing
        

    deleteAnimal = (id) => {
        APIManager.deleteAnimal(id)
          .then(() => this.props.history.push("/animals")
    )}

    render() {
        if (this.props.location.state != undefined){
            const animal = this.props.location.state.animal;
            return (
                <section className="animal">
                
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                Name: {animal.name}
                            </h4>
                            <h6 className="card-title">Kind: {animal.type}</h6>
                            <button
                                onClick={() => this.deleteAnimal(animal.id)}
                                className="card-link">Delete</button>
                        </div>
                    </div>
                </section>
            )
        }else{
            return (
                <Redirect to="/animals" /> 
            )
        }
    }
}