import React from 'react'
import EditorForNote from '../components/ReactQuill/EditorForNote';
import AuthFormHome from '../components/AuthFormHome';


const HomePage = () => {
  
  return (
    <>
    <div className='p-8 px-20'>
      <div className='flex flex-none m-auto justify-center gap-6 '>
        <EditorForNote/>
        <AuthFormHome/>
      </div>
    </div>
    </>
  )
}

export default HomePage;