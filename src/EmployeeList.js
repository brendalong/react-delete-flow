import React, { Component } from 'react';

class EmployeeList extends Component {

    render() {
        return (
            <>
           <h1>Employee List</h1>
            {this.props.employees.map((employee) => {
            return <article key={employee.id}>
                
                <section>{employee.name}</section>
            </article>
            })}
            </>
        );
    }
}

export default EmployeeList;