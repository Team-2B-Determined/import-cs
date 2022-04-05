import axios from "axios"


const API_URL = "http://localhost:5000/api/history/"

class HistoryService {

    //INPUT: user's email (string)
    //OUTPUT: JSON file with a field for the following:
        //History[]
    retrieve(email) {
        return axios
            .post(API_URL + "retrieve", {
                email
            })
            .then(response => {return response.data})
            .catch(error => {
                console.log(error)
            })
    }

    //INPUT:
    //OUTPUT:
    updateFont(email, history) {
        return axios
            .post(API_URL + 'update', {
                email,
                history
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