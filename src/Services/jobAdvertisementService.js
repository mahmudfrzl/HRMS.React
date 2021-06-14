import axios from "axios";

export default class JobAdvertisementService{
    getJobAdvertisement(){
        return axios.get("http://localhost:8080/api/jobadvertisement/getAll")
    }
    addJobAdvertisement(){
        return axios.post("http://localhost:8080/api/jobadvertisement/add")
    }
    deleteJobAdvertisement(id){
        return axios.delete("http://localhost:8080/api/jobadvertisement/delete?id="+id)
    }
    getJobAdvertisementFindByAllEnable(){
        return axios.get("http://localhost:8080/api/jobadvertisement/findByAllEnable")
    }
    getJobAdvertisementFindByEmployerIdAndEnableTrue(id){
        return axios.get("http://localhost:8080/api/jobadvertisement/findByEmployerIdAndEnableTrue?id="+id)
    }
    getJobAdvertisementFindByEnableTrueOrderByApplicationDateDesc(){
        return axios.get("http://localhost:8080/api/jobadvertisement/findByEnableTrueOrderByApplicationDateDesc")
    }
    getJobAdvertisementFindByEnableTrueOrderByCreatedAtAsc(){
        return axios.get("http://localhost:8080/api/jobadvertisement/findByEnableTrueOrderByCreatedAtAsc")
    }
    getJobAdvertisementFindById(id){
        return axios.get("http://localhost:8080/api/jobadvertisement/findById?id="+id)
    }
    
}
    