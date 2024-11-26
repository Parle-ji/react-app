import React from 'react'
import { NavLink, Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Labs from './pages/Labs'
import Suport from './pages/Suport'
import NotFound from './pages/NotFound'
import Main from './pages/Main'
const ReactRouter = () => {
  return (
    <div className='text-center capitalize'>

        <ul>
            <li><NavLink to='/'>home</NavLink></li>
            <li><NavLink to='/about'>about</NavLink></li>
            <li><NavLink to='/suport'>support</NavLink></li>
            <li><NavLink to='/labs'>labs</NavLink></li>
        </ul>



        <Routes>

            <Route path='/' element={<Main></Main>}>
            <Route index element={<Home></Home>}></Route>
            <Route path='/suport' element={<Suport></Suport>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/labs' element={<Labs></Labs>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
            </Route>

        </Routes>
    </div>
  )
}

export default ReactRouter