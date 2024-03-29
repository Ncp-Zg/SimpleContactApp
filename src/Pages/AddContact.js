import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import { setData } from '../redux/ActionCreators/contactAction';

const AddContact = () => {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [number,setNumber]=useState("");

    const contacts = useSelector((state)=>state);
    const dispatch = useDispatch();

    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();

        const checkEmail = contacts.find((contact) => contact.email === email && email)
        const checkNumber = contacts.find((contact) => contact.number === parseInt(number))

        if(!email||!number||!name){
            return toast.warning("Please fill in all blanks")
        }

        if(checkEmail){
            return toast.error("This email is already exist!")
        }

        if(checkNumber){
            return toast.error("This number is already exist");
        }

        const data ={
            id: contacts[contacts.length-1].id+1,
            name,
            number,
            email,
        }
        

        dispatch(setData(data));
        toast.success("Student added successfully");
        history.push("/")
    }


    return (
        <div className="container">
            <h1 className="display-3 my-5 text-center">
                    Add Contact
                </h1>
            <div className="row">
                
                <div className="col-md-6 shadow mx-auto p-5">
                   <form onSubmit = {handleSubmit}>
                       <div className="form-group mb-3">
                           <input type="text" placeholder="Name" className="form-control" value={name} onChange={e=>setName(e.target.value)}/>
                        </div>
                       <div className="form-group mb-3">
                           <input type="email" placeholder="Email" className="form-control" value={email} onChange={e=>setEmail(e.target.value)}/>
                        </div>
                       <div className="form-group mb-3">
                           <input type="number" placeholder="Phone Number" className="form-control" value={number} onChange={e=>setNumber(e.target.value)}/>
                        </div>
                       <div className="form-group">
                           <input type="submit" value="Add Student" className="w-100 btn btn-dark"/>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
    )
}

export default AddContact
