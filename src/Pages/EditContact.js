import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { updateData } from '../redux/ActionCreators/contactAction';

const EditContact = () => {

    const {id} = useParams();

    const contacts = useSelector(state=>state);
    const currentContact = contacts.find(contact=>contact.id === parseInt(id));

    const dispatch = useDispatch();

    const history = useHistory();

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [number,setNumber]=useState("");


    useEffect(()=>{
        if(currentContact){
            setName(currentContact.name)
            setEmail(currentContact.email)
            setNumber(currentContact.number)
        }
        
    },[currentContact])

    const handleSubmit = (e)=>{
        e.preventDefault();

        const checkEmail = contacts.find((contact) => contact.id!==parseInt(id) && contact.email === email)
        const checkNumber = contacts.find((contact) => contact.id!==parseInt(id) && contact.number === parseInt(number))

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
            id: parseInt(id),
            name,
            number,
            email,
        }
        

        dispatch(updateData(data));
        toast.success("Student updated successfully");
        history.push("/")
    }

    return (
        <div className="container">
            {currentContact? (
                <>
                    <h1 className="display-3 my-5 text-center">
                    Edit Student {id}
                </h1>
            <div className="row">
                
                <div className="col-md-6 shadow mx-auto p-5">
                   <form onSubmit={handleSubmit}>
                       <div className="form-group mb-3">
                           <input type="text" placeholder="Name" className="form-control" value={name} onChange={e=>setName(e.target.value)}/>
                        </div>
                       <div className="form-group mb-3">
                           <input type="email" placeholder="Email" className="form-control" value={email} onChange={e=>setEmail(e.target.value)}/>
                        </div>
                       <div className="form-group mb-3">
                           <input type="number" placeholder="Phone Number" className="form-control" value={number} onChange={e=>setNumber(e.target.value)}/>
                        </div>
                       <div className="form-group d-flex justify-content-around">
                           <input type="submit" value="Update Student" className="col-md-7 btn btn-dark"/>
                           <Link to="/" className="col-md-4 btn btn-danger">Cancel</Link>
                        </div>
                    </form> 
                </div>
            </div>
                </>
            ) : (
                <h1 className="display-3 my-5 text-center">
                    Student contact with id {id} is not exist
                </h1>
            )
            
            }
            
        </div>
    )
}

export default EditContact
