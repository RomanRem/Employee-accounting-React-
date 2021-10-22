import React from "react";
import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

 function App(){
        const data =[ 
        {name: "Roman.B", salary: 800, increase:false},
        {name: "Elena.B", salary: 300, increase:true},
        {name: "John.N", salary: 700, increase:true},
        {name: "Anastasia.B", salary: 10000, increase:false},
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