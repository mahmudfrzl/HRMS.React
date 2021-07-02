import axios from "axios";

export default class SchoolService{
    addSchool(){
        return axios.post("http://localhost:8080/api/school/addSchool")
    }
    getAll(){
        return axios.post("http://localhost:8080/api/school/getAll")
    }
}