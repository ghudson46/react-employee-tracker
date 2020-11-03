import React from "react";
import Item from "../Item";
import "./List.css";

function List(props) {
  return (
    <div className="container">
    <div className="row">
        <div className="col-md-12 p-4 text-center">
            <h3>
                Employee List
            </h3>
        </div>
    </div>
    <div className="row list-headers">
        <div className="col-sm-1">ID #</div>
        <div className="col-md-3">Full Name</div>
        <div className="col-md-5">Email Address</div>
        <div className="col-md-2">Phone Number</div>
        <div className="col-sm-1">Age</div>
    </div>
    <div>
        {props.employees.map((employee) => (
        <Item {...employee} key={employee.id} />
        ))}
    </div>
    <div className="row">
        <div className="col-sm-12 p-4 text-right">
            <i>
                {props.employees.length} employee(s) listed.
            </i> 
        </div>
    </div>
</div>
  )
}


export default List;