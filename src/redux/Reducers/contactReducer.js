const initialState=[
    {
        id:0,
        name:"mehmet",
        number:213232135465,
    }
    ,
    {
        id:1,
        name:"ahmet",
        number:3546464654,

    }
];


const contactReducer = (state=initialState, action)=>{
    switch ( action.type) {
        default:
            return state;
    }
};

export default contactReducer;