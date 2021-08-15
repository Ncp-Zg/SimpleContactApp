import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "../Types/contactTypes";

const initialState=[
    {
        id:0,
        name:"mehmet",
        number:213232135465,
        email:"asdas@g.com"
    }
    ,
    {
        id:1,
        name:"ahmet",
        number:3546464654,
        email:"test@test.com"

    }
];


const contactReducer = (state=initialState, action)=>{
    switch ( action.type) {
        case ADD_CONTACT :
            state = [...state,action.payload];
            return state;
        case UPDATE_CONTACT :
            const UpdateState = state.map(contact=>contact.id === action.payload.id ? action.payload:contact);
            state = UpdateState;
            return state;
        case DELETE_CONTACT :
            const filterContact = state.filter((contact)=>contact.id!==action.payload && contact);
            state = filterContact;
            return state;

        default:
            return state;
    }
};

export default contactReducer;