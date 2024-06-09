import Link from 'next/link'
import React from 'react'

const AuthFormHome = () => {
    return (
        <div className='w-2/5'>
            <div className="card bg-primary text-primary-content">
                <div className="card-body">
                    <button className="btn btn-circle ml-auto bg-red-400 text-white border-none hover:text-black transition-all duration-300 hover:rotate-180 hover:border-none">X</button>
                    <h2 className="card-title">Your Document is Not Saved!</h2>
                    <p>Notes is not saved Please Login to Save or Sign Up</p>
                    <div className="card-actions justify-end">
                        <button className="btn">Log In</button>
                        <Link  href="/signup" className="btn">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthFormHome