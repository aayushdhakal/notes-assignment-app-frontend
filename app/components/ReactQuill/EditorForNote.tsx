'use client'

import React, { useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

const EditorForNote = () => {
    const [value, setValue] = useState('');

    const customModuleForReactQuill = {
        toolbar: [
            [{ 'font': [] }],
            [{ 'size': ['small', false, 'large',] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['link'],

            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent

            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'align': [] }],
        ],
    };


    return (
        <div className="" >
            <ReactQuill
                modules={customModuleForReactQuill}
                theme='snow' 
                value={value} 
                onChange={setValue}
                className='customQuill' 
                />
        </div>
    )
}

export default EditorForNote