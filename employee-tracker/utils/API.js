import axios from 'axios'


  function Employees() {
    return axios.get('http://dummy.restapiexample.com/api/v1/employees');
  }


export default Employees