import axios from "axios"
export default class CandidateService{
    getCandidates(){
        return axios.get("http://localhost:8080/api/candidates/getall")
    }
    getCandidatesById(id){
        return axios.get("http://localhost:8080/api/candidates/getById?id=" + id)
    }
    deleteCandidatesById(id){
        return axios.delete("http://localhost:8080/api/candidates/delete?id=" + id)
    }
    addCandidate(){
        return axios.post("http://localhost:8080/api/candidates/add")
    }

}