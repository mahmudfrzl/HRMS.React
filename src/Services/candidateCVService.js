import axios from "axios";

export default class CandidateCvService{
    updateCovverLetter(covverLetter){
        return axios.post("http://localhost:8080/api/candidatecv/addCovverLetter",covverLetter)
    }
    updateExperience(experience){
        return axios.post("http://localhost:8080/api/candidatecv/addExperience",experience)
    }
    updateLanguage(language){
        return axios.post("http://localhost:8080/api/candidatecv/addLanguage",language)
    }
    updateLink(link){
        return axios.post("http://localhost:8080/api/candidatecv/addLink",link)
    }
    updateSchool(school){
        return axios.post("http://localhost:8080/api/candidatecv/addSchool",school)
    }
    updateTechnelogy(skill){
        return axios.post("http://localhost:8080/api/candidatecv/addTechnelogy",skill)
    }
    updatePhoto(photo){
        return axios.post("http://localhost:8080/api/candidatecv/upload",photo)
    }
}