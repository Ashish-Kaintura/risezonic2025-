import React from 'react'
import Navbar from '../components/Navbar'

export default function NotFound() {
    return (
        <div>
            <Navbar />
            <div className='flex justify-center h-screen items-center text-center' >
                <div className='text-4xl' >Page Not Found
                    <br />
                    <a className='text-xl text-blue-800' href="/"> Go Home  </a>
                </div>
                <br />

            </div>

        </div>
    )
}
