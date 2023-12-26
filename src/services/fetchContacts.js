import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


const URL = 'https://658884dcf50084a15a588e53.mockapi.io/contacts'


const getContacts = async (_, thunkAPI) => {

    try {
        const { data } = await axios.get(URL);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    
};

const postContact = async (newContact, thunkAPI) => { 
    try { 
        const {data}= await axios.post(URL, newContact)
return data
    }
    catch (error) {
         return thunkAPI.rejectWithValue(error.message)
    }
}


const delContact = async (contactId, thunkAPI) => {
    try { 
        const { data } = await axios.delete(`${URL}/${contactId}`)
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
