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

export const deleteTag = async (id?: number) => {
    try {
        let response = await client.delete("/tags/" + id)
        return response.status
    } catch (error) {
        return error
    }
}

export const editTag = async (tag: Tag, id?: number,) => {
    try {
        let response = await client.put("/tags/" + id, tag)
        return response.status
    } catch (error: any) {
        return error.response.status
    }
}

export const getAllTags = async () => {
    try {
        let response = await client.get("/tags")
        return response.data
    } catch (error: any) {
        return error.response.status
    }
}