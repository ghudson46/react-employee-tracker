import React, { useState, useEffect } from 'react'

import List from "../components/List";
import axios from "axios";
import Btn from "../components/Button";

function MainPage() {
  const [ employees, setEmployees ] = useState([]);
  const [ employeesToDisplay, setEmployeesToDisplay ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');

  useEffect(() => {
    getEmployees();
  }, [])
  
  

  const clearFilter = () => {
      setEmployeesToDisplay(employees);
      setSearchTerm("");
  };

  const getEmployees = () => {
    axios
      .get("https://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
          setEmployees(response.data.data);
          setEmployeesToDisplay(response.data.data);
        })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const Employees = [...employees];

    const filteredEmployees = Employees.filter((employee) => {
      const regex = new RegExp(searchTerm, "gi");
      return employee.employee_name.match(regex);
    });

   setEmployeesToDisplay(filteredEmployees);
  };

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-2" />
                  <div className="col-sm-8">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search employees by first or last name"
                        name="searchTerm"
                        autoComplete="off"
                        value={searchTerm}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-1 text-center">
                    <Btn type="submit">Submit</Btn>
                  </div>
                  <div className="col-sm-1 text-center">
                    {employees.length !==
                      employeesToDisplay.length && (
                      <Btn color="danger" onClick={clearFilter}>
                        Clear
                      </Btn>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <List employees={employeesToDisplay} />
      </>
    );
  }

export default MainPage;