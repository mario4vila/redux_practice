import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: 'mario',
    name: "mario",
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = 'Lili'+action.payload
        },
        setId: state => {
            state.id = '123'
        }
    }
})

export const { setName, setId } = userSlice.actions

export default userSlice.reducer

export const selectId = (state) => state.user.id
export const selectName = (state) => state.user.name