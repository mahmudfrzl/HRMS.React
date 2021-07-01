import axios from "axios";

export default class CandidateCvService{
    updateCovverLetter(){
        return axios.post("http://localhost:8080/api/candidatecv/addCovverLetter")
    }
    updateExperience(){
        return axios.post("http://localhost:8080/api/candidatecv/addExperience")
    }
    updateLanguage(){
        return axios.post("http://localhost:8080/api/candidatecv/addLanguage")
    }
    updateLink(){
        return axios.post("http://localhost:8080/api/candidatecv/addLink")
    }
    updateSchool(){
        return axios.post("http://localhost:8080/api/candidatecv/addSchool")
    }
    updateTechnelogy(){
        return axios.post("http://localhost:8080/api/candidatecv/addTechnelogy")
    }
    updatePhoto(){
        return axios.post("http://localhost:8080/api/candidatecv/upload")
    }
}