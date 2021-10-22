import React from 'react';
import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList =({data})=>{

    const elements = data.map(item =>{
        const {id,...itemProps}=item; // деструктуризация по остаточному принципу 
        //забираем только один элемент из массива обьектов, а остальные обьединяем в itemProps
        return(
            <EmployeesListItem key={id}{...itemProps}/>   //Object spread operator вместо 
                                             //name={item.name} salary={item.salary}
        )
    })
    console.log(elements);

    return(
        <ul className="app-list list-group">
            {elements}

        </ul>
    )
}
export default EmployeesList;