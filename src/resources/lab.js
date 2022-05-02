import Resource from "./resource";
import axios from "axios";

class LabResource extends Resource {
    static async getCompletedLabs (params) {
        if (params !== undefined) {
            params = {params: params}
        }
        const { data } = await axios.get(this.url + '/completed', params)
        return data;
    }
    static async getLabByCourseId(params) {
         if (params !== undefined) {
            params = {params: params}
        }
        const { data } = await axios.get('api/course/labs', params)
        return data;
    }
    static async getFile(params) {
         if (params !== undefined) {
            params = {params: params}
        }
        const data = await axios.get('api/lab/file', params)
        return data;
    }
}

LabResource.url = '/api/labs'

export default LabResource
