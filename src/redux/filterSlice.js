import { createSlice } from "@reduxjs/toolkit";


const initialStateFilter = ''

const filterSlice = createSlice(
    {
        name: 'filter',
        initialState: initialStateFilter,

        reducers: {
            changeFilter(state, action) {
                return (state = action.payload)
            },
        },
    }
);

export const { changeFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;