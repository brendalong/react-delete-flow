import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import APIManager from './db-calls';

class AnimalList extends Component {
    state = {
        animals: [],
    }

    deleteAnimal = (id) => {
        APIManager.deleteAnimal(id)
          .then(() => APIManager.getAll("animals")
          .then(data =>
            this.setState({
            animals: data,
            }))
      )}

    componentDidMount() {
        console.log("AnimalList.componentDidMount")
        APIManager.getAll("animals")
            .then(data =>
            this.setState({
            animals: data,
            }))
    }

    render() {
        console.log("AnimalList.render")
        return (
           <>
           <h1>Animals List</h1>
            {this.state.animals.map((animal) => {
            return <article key={animal.id}>
                
                <div>{animal.name}: {animal.type} 
                <Link className="nav-link" to={{pathname:`/animals/${animal.id}`,  
                                            state: {animal: animal} }}>Details</Link>
                <button
                onClick={() => this.deleteAnimal(animal.id)}
                    className="card-link">Delete From List</button>
               
                </div>
            </article>
            })}
            </>
        );
    }
}

export default AnimalList;