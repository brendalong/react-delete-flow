import React, { Component } from 'react';
import APIManager from './db-calls';

class EmployeeList extends Component {

    state = {
        employess: [],
    }

    componentDidMount() {
        APIManager.getAll("employees")
            .then(data =>
            this.setState({
            employees: data,
            }))
    }

    render() {
        return (
            <>
           <h1>Employee List</h1>
            {this.state.employees.map((employee) => {
            return <article key={employee.id}>
                
                <section>{employee.name}</section>
            </article>
            })}
            </>
        );
    }
}

export default EmployeeList;