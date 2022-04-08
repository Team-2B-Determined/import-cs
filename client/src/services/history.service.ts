import axios from "axios"
import authService from "./auth.service";


const API_URL = "/api/history/"

class HistoryService {

    //INPUT: None
    //OUTPUT: JSON file with a field for the following:
        //HistoryRow[]
    //REQ: email
    //RES: data {history: HistoryEntry[]}
    retrieve() {
        let email = authService.get_email()
        return axios
            .post(API_URL + "retrieve", {
                email
            })
            .then(response => {return response.data})
            .catch(error => {
                console.log(error)
            })
    }

    //INPUT: None
        //Feature : String
        //Input : String
        //Link : String
    //OUTPUT:
    pushHistory(feature, input, historyLink) {
        let email = authService.get_email()
        return axios
            .post(API_URL + 'update', {
                email,
                feature,
                input,
                historyLink
            })
            .then(response => {
                return true
            })
            .catch(error => {
                console.log(error)
                return false
            })
    }
}

export default new HistoryService()