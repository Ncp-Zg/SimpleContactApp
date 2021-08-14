import { ADD_CONTACT } from "../Types/contactTypes";

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
        default:
            return state;
    }
};

export default contactReducer;