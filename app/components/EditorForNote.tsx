'use client'

import React,{useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

const EditorForNote = () => {
    const [value,setValue] = useState('');
  return (
    <div className='grow h-96'>
        <ReactQuill theme="snow" value={value} onChange={setValue} className='custom-quill' />
    </div>
  )
}

export default EditorForNote