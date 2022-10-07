import Tag from "../interface/Tag"
import { client } from "./clients/Instance"

export const addTag = async (tag: Tag) => {
    try {
        let response = await client.post("/tags", tag)
        return response.data
    } catch (error: any) {
        return error.response.status
    }
}

export const deleteTag = async (id?: number) => {
    try {
        await client.delete("/tags/" + id)
    } catch (error) {
        console.error(error);
    }
}

export const editTag = async (tag: Tag, id?: number,) => {
    try {
        let response = await client.put("/tags/" + id, tag)
        return response.data
    } catch (error: any) {
        return error.response.status
    }
}

export const getAllTags = async () => {
    try {
        let response = await client.get("/tags")
        return response.data
    } catch (error: any) {
        console.error(error);
    }
}