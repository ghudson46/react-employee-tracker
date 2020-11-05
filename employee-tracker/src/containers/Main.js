import React, { Component } from 'react'
import Btn from '../components/Button'
import List from '../components/List'
import Employees from '../utils/API.js'

class Main extends Component {
    state = {
      employees: Employees,
      employeesDisplay: Employees,
      search: '',
    }

    clearSearch = () => {
      this.setState({
        filteredEmployeeList: this.state.employeeList,
        search: '',
      });
    };

    handleChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      });
    };

    handleSubmit = event => {
      event.preventDefault();

      const employees = [...this.state.employees];

      const filteredEmployeeList = employees.filter((employee) => {
        const regex = new RegExp(this.state.search, "gi");
        return employee.employee_name.match(regex);
      });

      this.setState({
        employeesDisplay: filteredEmployeeList,
      });
    };

    render() {
      return (
        <>
          <div className="container">
            <div className="row">
              <div className="col">
                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-sm-2">
                      <div className="col-sm-8">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="search for employees by name"
                            name="search"
                            autoComplete="off"
                            value={this.state.search}
                            onChange={this.handleChange}
                            />
                        </div>
                      </div>
                      <div className="col-sm-1 text-center">
                        <Btn type="submit">Submit</Btn>
                      </div>
                      <div className="col-sm-1 text-center">
                        {this.state.employees.length !==
                          this.state.employeesDisplay.length && (
                            <Btn color="danger" onClick={this.clearFilter}>
                              Clear
                            </Btn>
                          )}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <List employee={this.state.employeesDisplay} />
        </>
      )
    }
};


export default Main