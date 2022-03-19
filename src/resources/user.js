import Resource from "./resource";
import axios from "axios";
const URL = 'http://127.0.0.1:8000'
class UserResource extends Resource {
    static async getUser(username) {
        const { data } = await axios.get(`${URL}${this.url}/`, { params: { username: username } })
        console.log(data)
        return data
    }
}

UserResource.url = '/api/user'

export default UserResource