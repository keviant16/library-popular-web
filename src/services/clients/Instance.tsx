import axios from "axios";

const jwtToken = localStorage.getItem('jwtToken')

export const client = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
        Authorization: 'Bearer ' + jwtToken
    }
})

export const googleClient = axios.create({
    baseURL: "https://www.googleapis.com/books",
})
