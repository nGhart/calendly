import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Construction from './Pages/Construction'
import Realty from './Pages/Realty'
import PropertyManagement from './Pages/PropertyManagement'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='construction' element={<Construction/>} />
        <Route path='realty' element={<Realty/>} />
        <Route path='propmanagement' element={<PropertyManagement/>} />
    </Routes>
  )
}

export default Routing