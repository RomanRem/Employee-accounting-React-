import React from 'react';
import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList =({data})=>{

    const elements = data.map(item =>{
        return(
            <EmployeesListItem {...item}/>   //Object spread operator вместо 
                                             //name={item.name} salary={item.salary}
        )
    })

    return(
        <ul className="app-list list-group">
            {elements}

        </ul>
    )
}
export default EmployeesList;