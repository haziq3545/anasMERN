import React from 'react'
import { Route, Routes} from 'react-router-dom'
import SignUp from './component/SignUp'
import Admindb from './Dashboards/Admindb'
import ProductForm from './Dashboards/Componentsdb/ProductForm'
// import ProductList from './Dashboards/Componentsdb/ProductList'

import About from './Pages/About'
import Contact from './Pages/Contact'
import Cosmetics from './Pages/Cosmetics'
import Jewelry from './Pages/Jewelry'
import Main from './Pages/Main'
import SkinCare from './Pages/SkinCare'
import EditProduct from './Dashboards/Componentsdb/EditProduct'
import LogIn from './component/LogIn'





const App = () => {
  return (
    <>
    
    
   
    <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/main' element={<Main/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/cosmetics' element={<Cosmetics/>}/>
    <Route path='/skincare' element={<SkinCare/>}/>
    <Route path='/jewelry' element={<Jewelry/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<LogIn/>}/>

    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/dashboard' element={<Admindb/>}>
    <Route path="/dashboard/products" element={<ProductForm />} />
    <Route path="/dashboard/edit/:id" element={<EditProduct />} />
    </Route>
    </Routes>
    </>
  )
}

export default App