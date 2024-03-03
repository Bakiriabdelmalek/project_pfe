import axios from 'axios'


const baseURL = "http://localhost:3000/";

const instance = axios.create({
    baseURL:baseURL,
    withCredentials: true 
})


export default instance;