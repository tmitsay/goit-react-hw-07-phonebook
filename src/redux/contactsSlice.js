import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { delContactThunk, postContactThunk, getContactsThunk } from "services/fetchContacts";


const initialState = {
    items: [],
    isLoading: false,
    error: null
}

const onPending = (state) => {
    state.isLoading = true;
    state.error = null;
    
}

const onRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
}

const arrAllOfActs = [delContactThunk, postContactThunk, getContactsThunk]

const getStatusActions = status => arrAllOfActs.map(el=>el[status])


 export const phoneContactsSlice = createSlice(
    {
    name: 'contacts',
    initialState,
    extraReducers: 
        builder => {
            builder
                .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
                    state.isLoading = false;
                    state.error = null;
                    state.items = payload;
                })
                .addCase(postContactThunk.fulfilled, (state, { payload }) => {
                    state.isLoading = false;
                    state.error = null;
                    state.items.push(payload);
             })
             .addCase(delContactThunk.fulfilled, (state, { payload }) => {
                    state.isLoading = false;
                    state.error = null;
                    state.items = state.items.filter(contact => contact.id !== payload.id);
             })
                .addMatcher(isAnyOf(...getStatusActions('pending')), onPending)
                .addMatcher(isAnyOf(...getStatusActions('rejected')), onRejected)
        }
    })

export const contactsReducer = phoneContactsSlice.reducer;