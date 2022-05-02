import Resource from "./resource";
import axios from "axios";

class CourseResource extends Resource {
    static async getStartedCourses (params) {
        if (params !== undefined) {
            params = {params: params}
        }
        const { data } = await axios.get(this.url + '/started', params)
        return data;
    }
}

CourseResource.url = '/api/courses'

export default CourseResource
