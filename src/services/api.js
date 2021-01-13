import axios from 'axios';

//Validates if the app is un production
const isProduction = process.env.NODE_ENV === "production";

//If the app is un prod, it will use another route. If not, it will use localhost
const URL =  isProduction ? "https://hypocenter.herokuapp.com/api" : "http://localhost:3001/api";
//const URL = "https://jb-project-back.herokuapp.com/api";

axios.defaults.withCredentials = true;

export const _axios = axios.create({
    baseURL: URL,
    timeout: 10000
})