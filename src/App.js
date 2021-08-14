import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navbar from './Components/Navbar'
import AddContact from './Pages/AddContact'
import EditContact from './Pages/EditContact'
import HomePage from './Pages/HomePage'

const App = () => {
  return (
    <div className="App">
       <ToastContainer/>
      <Navbar/>
      <Switch>
        <Route exact path = "/" component={()=><HomePage/>}/>
        <Route path = "/add" component={()=><AddContact/>}/>
        <Route path = "/edit/:id" component={()=><EditContact/>}/>
      </Switch>
      
    </div>
  )
}

export default App
