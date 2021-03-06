import axios from "axios";

const API_URL = "api/auth/"
class AuthService {

    //Sends a POST request to the api path: /api/auth/signin
        //Attaches email and password
        //Stores returned access token in local storage
    login(email, password) {
        return axios
            .post(API_URL + "signin", {
                email,
                password,

            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data))
                }
                return response.data
            })
            .catch(error => {
                console.log(error)
            })
    }

    logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("fontsPref");
        return true
    }

    register(email, password, roles) {
        return axios.post(API_URL + "signup", {
            email,
            password,
            roles
        })
            .then(() => {

            })
    }

    isLoggedIn() {
        let user = localStorage.getItem('user')
        if(user === null) {
            return false
        }
        // @ts-ignore
        let _user = JSON.parse(user)
        if(_user.accessToken === null) {
            return false
        }
        return true
    }

    get_email() {
        if(!this.isLoggedIn()){
            return null
        }
        // @ts-ignore
        let user = JSON.parse(localStorage.getItem('user'))
        return user.email
    }
}

export default new AuthService()