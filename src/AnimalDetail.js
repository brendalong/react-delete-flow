import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';

export default class AnimalDetail extends Component {
    render() {
        console.log("render of AnimalDetail running id:", this.props.match.params.animalId);
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}

        // return (
        //     <section className="animal">
        //         <div key={animal.id} className="card">
        //             <div className="card-body">
        //                 <h4 className="card-title">
        //                     {animal.name}
        //                 </h4>
        //                 <h6 className="card-title">{animal.type}</h6>
        //                 <a href="#"
        //                     onClick={() => this.props.deleteAnimal(animal.id)
        //                                     .then(() => this.props.history.push("/animals"))}
        //                     className="card-link">Delete</a>
        //             </div>
        //         </div>
        //     </section>
        // )
        return (
            <section className="animal">
                {animal.id ?
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                {animal.name}
                            </h4>
                            <h6 className="card-title">{animal.type}</h6>
                            <a href="#"
                                onClick={() => this.props.deleteAnimal(animal.id)}
                                className="card-link">Delete</a>
                        </div>
                    </div>

                    : <Redirect to='/animals' />
                }
            </ section>
        )
    }
}