import { client } from "./clients/Instance"
import Section from "../interface/Section"

export const addSection = async (section: Section) => {
    try {
        let response = await client.post("/sections", section)
        return response.status
    } catch (error: any) {
        return error.response.status
    }
}

export const deleteSection = async (resourceId: number | null) => {
    try {
        let response = await client.delete("/sections/" + resourceId)
        return response.status
    } catch (error) {
        return error
    }
}

export const editSection = async (resourceId: number | null, section: Section) => {
    try {
        let response = await client.put("/sections/" + resourceId, section)
        return response.status
    } catch (error: any) {
        return error.response.status
    }
}

export const getAllSections = async () => {
    try {
        let response = await client.get("/sections")
        return response.data._embedded.sections
    } catch (error: any) {
        return error.response.status
    }
}