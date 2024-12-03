import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface FieldPayload{
    field: string;
}

interface SortReducer {
    field: string;
    order: string;
}

const initialState:SortReducer = {
    field: "name",
    order: "",
}

const sortSlice = createSlice({
    name:"sort",
    initialState: initialState,
    reducers:{
        toggleOrder: (state) => {
            state.order = state.order === "-" ? "" : "-";
        },
        setField: (state, action:PayloadAction<FieldPayload>) => {
            state.field = action.payload.field;
        }
    }
})

export const {toggleOrder, setField} = sortSlice.actions;
export default sortSlice.reducer;