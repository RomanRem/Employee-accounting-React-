import React from "react";
import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

 function App(){
        const data =[ 
        {name: "Roman.B", salary: 800},
        {name: "Elena.B", salary: 300},
        {name: "John.N", salary: 700},
        {name: "Anastasia.B", salary: 10000},
        ];

     return (
         <div className='app'>
             <AppInfo/>

             <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
             </div>
                <EmployeesList data={data}/>
                <EmployeesAddForm/>
         </div>
     );
 }
 export default App;