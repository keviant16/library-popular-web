import axios from "axios";

const jwtToken = localStorage.getItem('jwtToken')

//const LOCALHOST = 'http://localhost:8080/api'
const HEROKU = "https://library-popular-web-service.herokuapp.com"

export const client = axios.create({
    baseURL: HEROKU,
    headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
        Authorization: 'Bearer ' + jwtToken,
        'mode': 'no-cors'
    }
})

export const googleClient = axios.create({
    baseURL: "https://www.googleapis.com/books",
})
