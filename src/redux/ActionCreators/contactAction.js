import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "../Types/contactTypes";

const addContact = (data)=>({
    type:ADD_CONTACT,
    payload:data
})

const updateContact = (data)=>({
    type:UPDATE_CONTACT,
    payload:data
})
const deleteContact = (data)=>({
    type:DELETE_CONTACT,
    payload:data
})


export const setData = (data)=> dispatch=>{
    dispatch(addContact(data))
}
export const updateData = (data)=> dispatch=>{
    dispatch(updateContact(data))
}
export const deleteData = (data)=> dispatch=>{
    dispatch(deleteContact(data))
}