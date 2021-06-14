import axios from "axios";

export default class EmployerService{
    getEmployers(){
        return axios.get("http://localhost:8080/api/employer/getall")
    }
    deleteEmployerById(id){
        return axios.delete("http://localhost:8080/api/employer/delete?id="+id)
    }
    addEmployer(){
        return axios.post("http://localhost:8080/api/employer/add")
    }
}