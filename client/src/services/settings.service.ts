import axios from "axios"
import authService from "./auth.service";


const API_URL = "/api/setting/"

class SettingsService {
    //INPUT: user's email (string)
    //OUTPUT: JSON file with a field for the following:
        //Font
        //Keyboard Map
    retrieve() {
        let email = authService.get_email()
        return axios
            .post(API_URL + "retrieve", {
                email
            })
            .then(response => {
                console.log(response)
                return response.data})
            .catch(error => {
                console.log(error)
            })
    }

    //INPUT: user email, font (both strings)
    //OUTPUT: boolean for success
    updateFont(font) {
        let email = authService.get_email()
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
    updateKeyboard(keyboard) {
        let email = authService.get_email()
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