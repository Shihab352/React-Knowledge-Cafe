

import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog =>{
   const newBookmarks = [...bookmarks, blog];
   setBookmarks(newBookmarks);
  }
  return (
    <>
      
      <Header></Header>
      <div className='md:flex container mx-auto mt-10'>
    <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
    <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
