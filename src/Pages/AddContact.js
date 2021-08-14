import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const AddContact = () => {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [number,setNumber]=useState("");

    const contacts = useSelector((state)=>state);

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(!email||!number||!name){
            return toast.warning("Please fill in all blanks")
        }
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
