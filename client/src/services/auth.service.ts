import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/"

class AuthService {

    //Sends a POST request to the api path: /api/auth/signin
        //Attaches email and password
        //Stores returned access token in local storage
    login(email, password) {
        return axios
            .post(API_URL + "signin", {
                email,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data))
                }
                return response.data
            })
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(email, password) {
        return axios.post(API_URL + "signup", {
            email,
            password
        })
    }
}

export default new AuthService()