import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = 'https://658884dcf50084a15a588e53.mockapi.io'


const getContacts = async (_, thunkAPI) => {

    try {
        const { data } = await axios.get('/contacts');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    
};

const postContact = async ({name, number}, thunkAPI) => { 
    try { 
        const {data}= await axios.post('/contacts', {name, number})
return data
    }
    catch (error) {
         return thunkAPI.rejectWithValue(error.message)
    }
}


const delContact = async (contactId, thunkAPI) => {
    try { 
        const { data } = await axios.delete(`/contacts/${contactId}`)
        return data
    }
    catch (error) {
         return thunkAPI.rejectWithValue(error.message)
    }
}


export const getContactsThunk = createAsyncThunk(
    'contacts/getContacts',
    getContacts
)
export const postContactThunk = createAsyncThunk(
    'contacts/postContacts',
    postContact
)
export const delContactThunk = createAsyncThunk(
    'contacts/delContacts',
    delContact
)
