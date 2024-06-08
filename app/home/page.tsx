import React from 'react'
import EditorForNote from '../components/EditorForNote';
import AuthFormHome from '../components/AuthFormHome';


const HomePage = () => {
  
  return (
    <>
    <div className='p-10'>
      <div className='flex w-full m-auto justify-center gap-6 '>
        <EditorForNote/>
        <AuthFormHome/>
      </div>
    </div>
    </>
  )
}

export default HomePage;