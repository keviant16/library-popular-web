import { client } from "./clients/Instance"
import Section from "../interface/Section"

export const addSection = async (section: Section) => {
    try {
        let response = await client.post("/sections", section)
        console.log(response);
        return response.status
    } catch (error) {
        return error
    }
}

export const deleteSection = async (resourceId: number) => {
    try {
        let response = await client.delete("/sections/" + resourceId)
        console.log(response);
        return response.status
    } catch (error) {
        return error
    }
}

export const getAllSections = async () => {
    try {
        let response = await client.get("/sections")
        return response.data._embedded.sections
    } catch (error) {

        console.error(error);
    }
}