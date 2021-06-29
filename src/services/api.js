import axios from 'axios';

const api = axios.create({
    baseURL: "https://semana-da-arte.herokuapp.com"
})

export default api;