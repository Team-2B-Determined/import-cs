import axios from "axios"


const API_URL = "http://localhost:5000/api/setting/"

class SettingsService {
    //INPUT: user's email (string)
    //OUTPUT: JSON file with a field for the following:
        //Font
        //Keyboard Map
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

    //INPUT: user email, font (both strings)
    //OUTPUT: boolean for success
    updateFont(email, font) {
        return axios
            .post(API_URL + 'update/font', {
                email,
                font
            })
            .then(response => {
                return true
            })
            .catch(error => {
                console.log(error)
                return false
            })
    }
    //INPUT: user email, keyboard (both strings)
    //OUTPUT: boolean for success
    updateKeyboard(email, keyboard) {
        return axios
            .post(API_URL + 'update/keyboard', {
                email,
                keyboard
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
export default new SettingsService()