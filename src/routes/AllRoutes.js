import React from 'react'
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom"
import Home from '../pages/Home/Home'

const AllRoutes = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  
  )
}

export default AllRoutes