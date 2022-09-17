import axios from "axios";
export const client = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
    }
})

export const googleClient = axios.create({
    baseURL: "https://www.googleapis.com/books",
    headers: {
        // "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
    }
})
