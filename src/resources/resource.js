import axios from 'axios'
const URL = 'http://127.0.0.1:8000'
axios.defaults.baseURL = URL
export default class Resource {
    static async fetch (params) {
        if (params !== undefined) {
            params = {params: params}
        }
        const { data } = await axios.get(this.url + '/all', params)
        return data;
    }

    static async get (params) {
        const { data } = await axios.get(this.url + '/' + params.id)
        return data;
    }

    static async save (params, forcePost = false) {
        const id = params.id || (params instanceof FormData && params.get('id'))
        const method = id && !forcePost ? 'put' : 'post'
        const { data } = await axios.request({
            method,
            url: id ? URL + this.url + '/update/' + id : URL + this.url + '/new',
            data: params
        })
        return data;
    }

    static async delete (params) {
        const { data } = await axios.delete(this.url + '/' + params.id, params);
        return data
    }

}
