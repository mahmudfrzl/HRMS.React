import axios from "axios";

export default class EmployeeService{
    getEmployees(){
        return axios.get("http://localhost:8080/api/employee/getall")
    }
    deleteEmployeeByid(id){
        return axios.delete("http://localhost:8080/api/employee/delete?id=" +id)
    }
    addEmployee(){
        return axios.post("http://localhost:8080/api/employee/add")
    }
    updateEmployee(){
        return axios.put("http://localhost:8080/api/employee/update")
    }
}