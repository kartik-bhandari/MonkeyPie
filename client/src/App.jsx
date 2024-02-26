import React from 'react'
import {BrowserRouter , Link , Route ,Routes} from 'react-router-dom'
import CreatePost from './pages/createPost'
import Home from './pages/home'
import Footer from './components/footer'

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex fixed z-10 justify-between items-center bg-[#000000] sm:px-8 px-4 py-4">
        <Link to="/">
          <img src='./monkey.png' className='inline sm:w-10 w-5 object-contain'/>
          <h1 className='inline font-extrabold text-white sm:text-[20px] text-sm'>monkeyPie</h1>
        </Link>
        <Link to="/createPost">
          <button className='font-inter sm:font-extrabold bg-green text-white px-4 py-2 sm:w-32 font-bold text-sm w-20 rounded-full hover:text-black'>create</button>
        </Link>
      </header>
      
      <main className=' pt-8 w-full bg-white min-h-[calc(100vh-73px)]'>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/CreatePost' element={<CreatePost/>}/>
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

export default App
