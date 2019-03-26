import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AnimalList extends Component {

    render() {
        return (
           <>
           <h1>Animals List</h1>
            {this.props.animals.map((animal) => {
            return <article key={animal.id}>
                
                <div>{animal.name}: {animal.type} 
                <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                <a href="#"
                onClick={() => this.props.deleteAnimal(animal.id)}
                className="card-link">Delete From List</a></div>
            </article>
            })}
            </>
        );
    }
}

export default AnimalList;