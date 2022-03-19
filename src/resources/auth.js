import Resource from "./resource";
import axios from "axios";
const URL = 'http://127.0.0.1:8000'
const DEFAULT_HEADERS = { 'Content-type': 'application/json' }
class AuthResource extends Resource {
    static async register(username, password) {
         const { data } = await axios.post(`${URL}${this.url}/users`, {
             username: username,
             password: password
         }, {headers: DEFAULT_HEADERS})
        return data
    }
    static async login(username, password) {
         const { data } = await axios.post(`${URL}${this.url}/token/`, {
             username: username,
             password: password
         })
        return data
    }
    static async logout() {
        //TODO: LOGOUT
        return true
    }

}

AuthResource.url = '/api/auth'

export default AuthResource