import React, { useEffect } from 'react'
import { useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: '', password: '', username: '' })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let password = localStorage.getItem("password");
        let passwordArrauy;
        if (password) {
            setpasswordArray(JSON.parse(password))
        }

    }, [])

    const copyText =(text) =>{
        alert("You clicked on copyText : " + text)
        navigator.clipboard.writeText(text)
    }
    const showPassword = () => {
        // alert("show the password")
        if (passwordRef.current.type === 'password') {
            // If it's currently password type, change it to text

            passwordRef.current.type = 'text';
        } else {
            // If it's currently text type, change it back to password
            passwordRef.current.type = 'password';
        }

    }
    const savePassword = () => {
        setpasswordArray([...passwordArray, form])
        localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
        passwordArray.push(form)
        console.log([...passwordArray, form])
        toast('🦄Password Saved!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            <ToastContainer />
            <div className="absolute top-0 -z-10 h-full w-full bg-white">
                <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-green-400 opacity-50 blur-[70px]"></div></div>
            <div className="container bg-slate-200 mycontainer">
                <h1 className=' text-4xl text-green text-center font-bold'>  <span className='text-green-900'> &lt;</span>
                    Pass
                    <span className='text-green-600'>OP</span>
                    <span className='text-green-900'> /&gt;</span></h1>
                <p className='text-center'>Your own Password Manager</p>
                <div className='text-grey flex flex-col p-4 gap-8 items-center justify-center'>

                    <input value={form.site} onChange={handleChange}
                        placeholder='Enter website URL' className='rounded-full border-green w-full text-black p-4 py-1' type="text" name='site' id='' />
                    <div className='w-full flex justify-between gap-8'>

                        <input value={form.username} onChange={handleChange}
                            placeholder='Enter Username' className='rounded-full border-green w-full text-black p-4 py-1' type="text" name='username' id='' />

                        <div className="relative w-full">
                            <input ref={passwordRef} value={form.password} onChange={handleChange}
                                placeholder='Enter Password' className=' right-0 rounded-full border-green w-full text-black p-4 py-1 mouse-pointer select-none' type="password" name='password' id='' />
                            <span className='absolute right-1 top-1 cursor-pointer select-none' onClick={showPassword}>
                                Show
                            </span>

                        </div>
                    </div>
                    <button onClick={savePassword} className='bg-green-600 font-bold rounded-full hover:bg-green-300 p-3 border-blue-900 border-2' style={{ margin: 'auto' }}>
                        Add Password
                    </button>
                </div>
                <div className='passwords'>
                    <h2 className='font-bold text-2xl py-4 '>Your password</h2>
                    {passwordArray.length === 0 && <div>No password to show</div>}
                    {passwordArray.length !== 0 &&
                        <table className='table-auto w-full rounded-md overflow-hidden'>
                            <thead className='bg-green-800 text-white'>
                                <tr>
                                    <th className='py-2'>URL</th>
                                    <th className='py-2'>UserName</th>
                                    <th className='py-2'>Password</th>
                                    <th className='py-2 w-5'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-200'>
                                {passwordArray.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className='text-center w-32'>
                                                <a href={item.site} style={{ marginRight: '5px' }}>{item.site}</a> {/* Added margin to the right */}
                                                <i className="fas fa-copy" onClick={()=>{copyText(item.site)}}></i>
                                            </td>

                                            <td className='text-center w-32'>
                                                <a href={item.site} style={{ marginRight: '5px' }}>{item.username}</a> {/* Added margin to the right */}
                                                <i className="fas fa-copy"onClick={()=>{copyText(item.username)}}></i>
                                            </td>

                                            <td className='text-center w-32'>
                                                <a href={item.site} style={{ marginRight: '5px' }}>{item.password}</a> {/* Added margin to the right */}
                                                <i className="fas fa-copy" onClick={()=>{copyText(item.password)}}></i>
                                            </td>

                                            <td className='text-center py-4'>
                                            <i class="fa-solid fa-pen-to-square "style={{ marginRight: '10px', marginLeft: '11px' }}></i>
                                            <i class="fa-solid fa-delete-left" ></i>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    }

                </div>

            </div>
        </>
    )
}

export default Manager