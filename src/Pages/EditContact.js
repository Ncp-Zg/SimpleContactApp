import React from 'react'
import { Link, useParams } from 'react-router-dom'

const EditContact = () => {

    const {id} = useParams();

    return (
        <div className="container">
            <h1 className="display-3 my-5 text-center">
                    Edit Student {id}
                </h1>
            <div className="row">
                
                <div className="col-md-6 shadow mx-auto p-5">
                   <form>
                       <div className="form-group mb-3">
                           <input type="text" placeholder="Name" className="form-control"/>
                        </div>
                       <div className="form-group mb-3">
                           <input type="email" placeholder="Email" className="form-control"/>
                        </div>
                       <div className="form-group mb-3">
                           <input type="number" placeholder="Phone Number" className="form-control"/>
                        </div>
                       <div className="form-group d-flex justify-content-around">
                           <input type="submit" value="Update Student" className="col-md-5 btn btn-dark"/>
                           <Link to="/" className="col-md-5 btn btn-danger">Cancel</Link>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
    )
}

export default EditContact
