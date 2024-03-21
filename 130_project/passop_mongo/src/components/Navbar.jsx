import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className='flex justify-between items-center gap center px-4 h-14 mycontainer py-5'>

                <div className='logo font-bold text-xl'>
                    <span className='text-green-700'> &lt;</span>
                    Pass
                    <span className='text-green-700'>OP</span>
                    <span className='text-green-700'> /&gt;</span>


                </div>
                <ul>
                    <li className='flex gap-4'>
                        <a className='hover:font-bold' href="# ">Home</a>
                        <a className='hover:font-bold' href="# ">About</a>
                        <a className='hover:font-bold' href="# ">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar