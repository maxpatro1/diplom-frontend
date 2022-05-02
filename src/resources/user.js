import Resource from "./resource";
import axios from "axios";
class UserResource extends Resource {
    static async getUser(username) {
        const { data } = await axios.get(`${this.url}/`, { params: { username: username } })
        return data
    }
}

UserResource.url = '/api/user'

export default UserResource