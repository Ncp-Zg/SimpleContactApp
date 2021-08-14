import { ADD_CONTACT } from "../Types/contactTypes";

const addContact = (data)=>({
    type:ADD_CONTACT,
    payload:data
})


export const setData = (data)=> dispatch=>{
    dispatch(addContact(data))
}