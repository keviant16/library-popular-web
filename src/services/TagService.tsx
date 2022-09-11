import Tag from "../interface/Tag"
import { client } from "./clients/Instance"

export const addTag = async (tag: Tag) => {
    try {
        let response = await client.post("/tags", tag)
        return response.status
    } catch (error: any) {
        return error.response.status
    }
}

export const deleteTag = async (resourceId: number | null) => {
    try {
        let response = await client.delete("/tags/" + resourceId)
        return response.status
    } catch (error) {
        return error
    }
}

export const editTag = async (resourceId: number | null, tag: Tag) => {
    try {
        let response = await client.put("/tags/" + resourceId, tag)
        return response.status
    } catch (error: any) {
        return error.response.status
    }
}

export const getAllTags = async () => {
    try {
        let response = await client.get("/tags")

        return response.data._embedded.tags
    } catch (error: any) {
        return error.response.status
    }
}