import Resource from "./resource";
import axios from "axios";
const DEFAULT_HEADERS = { 'Content-type': 'application/json' }
class AuthResource extends Resource {
    static async register(username, password) {
         const { data } = await axios.post(`${this.url}/users`, {
             username: username,
             password: password
         }, {headers: DEFAULT_HEADERS})
        return data
    }
    static async login(username, password) {
         const { data } = await axios.post(`${this.url}/token/`, {
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