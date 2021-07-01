import axios from "axios";

export default class ResumeService{
    getById(candidateId){
        return axios.get("http://localhost:8080/api/resume/getById?candidateId="+candidateId)
    }


} 