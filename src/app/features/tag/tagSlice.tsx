import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tag from '../../../interface/Tag'

interface TagState {
    tags: Tag[]
}

const checkId = (changeId?: number, currentID?: number,) => {
    return changeId === currentID
}

const initialState: TagState = {
    tags: []
}

export const TagSlice = createSlice({
    name: 'tag',
    initialState: initialState,
    reducers: {
        pushTag: (state, action: PayloadAction<Tag>) => {
            return {
                ...state,
                tags: [...state.tags, action.payload]
            }
        },
        setTags: (state, action: PayloadAction<Tag[]>) => {
            state.tags = action.payload
        },
        filterTag: (state, action: PayloadAction<Tag>) => {
            state.tags = state.tags.filter((Tag => Tag.name !== action.payload.name))
        },
        updateTag: (state, action: PayloadAction<Tag>) => {
            const copyTags = [...state.tags]
            const index = copyTags.findIndex((value) => checkId(action.payload.id, value.id))
            copyTags[index].name = action.payload.name
        },
    }
})

export const { pushTag, setTags, filterTag, updateTag } = TagSlice.actions

export default TagSlice.reducer