import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
    const passwordRef = useRef();
    const [form, setform] = useState({ site: '', password: '', username: '' });
    const [passwordArray, setpasswordArray] = useState([]);


    const getPassword = async () => {

        let req = await fetch("http://localhost:3000/")
        let passwords = await req.json("password");
        setpasswordArray(passwords);
        console.log(passwords)
    }

    useEffect(() => {
        getPassword()
    }, []);

    const copyText = (text) => {
        // alert("You clicked on copyText : " + text);
        navigator.clipboard.writeText(text);
        toast('🦄 Copied!', {
            position: "top-right",
            autoClose: 1000,
            theme: "dark",
        });
    };

    const showPassword = () => {
        if (passwordRef.current.type === 'password') {
            passwordRef.current.type = 'text';
        } else {
            passwordRef.current.type = 'password';
        }
    };

    const savePassword = async () => {
        if (form.site.length > 9 && form.username.length > 4 && form.password.length > 3) {
            const newPassword = { ...form, id: uuidv4() };
            setpasswordArray([...passwordArray, newPassword]);
            let res = await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, id: uuidv4() }) })
            setform({ site: '', password: '', username: '' });

            toast('🦄 Password Saved!', {
                position: "top-right",
                autoClose: 1000,
                theme: "light",
            });
        }
        else {
            toast('🦄 Password Not Saved!', {
                position: "top-right",
                autoClose: 1000,
                theme: "dark",
            });
        }
    };

    const deletePassword = async (id) => {
        let c = confirm("Do you really want to delete this password??");
        if (c) {
            const updatedPasswords = passwordArray.filter(item => item.id !== id);
            setpasswordArray(updatedPasswords);
            let res = await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })
            toast('🦄 Deleted Succesfully!', {
                position: "top-right",
                autoClose: 1000,
                theme: "dark",
            });
        }
    };

    const editPassword = async(id) => {
        const updatedPasswords = passwordArray.filter(item => item.id !== id);
        setform(passwordArray.filter(i => i.id === id)[0]);
        setpasswordArray(updatedPasswords);
        let res = await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })
        
    };

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                pauseOnFocusLoss
                draggable
                theme="light"
                transition="Bounce"
            />
            <ToastContainer />

            <div className="absolute top-0 -z-10 h-full w-full bg-white">
                <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-green-400 opacity-50 blur-[70px]"></div>
            </div>
            <div className="container bg-slate-200 md:mycontainer p-2 md:p-0 min-h-[87.7vh]">
                <h1 className=' text-4xl text-green text-center font-bold'>
                    <span className='text-green-900'> &lt;</span>
                    Pass
                    <span className='text-green-600'>OP</span>
                    <span className='text-green-900'> /&gt;</span>
                </h1>
                <p className='text-center'>Your own Password Manager</p>
                <div className='text-grey flex flex-col p-4 gap-8 items-center '>
                    <input
                        value={form.site}
                        onChange={handleChange}
                        placeholder='Enter website URL'
                        className='rounded-full border-green flex w-full text-black p-4 py-1'
                        type="text"
                        name='site'
                        id='site'
                    />
                    <div className='flex w-full flex-col md:flex-row justify-between gap-8'>
                        <input
                            value={form.username}
                            onChange={handleChange}
                            placeholder='Enter Username'
                            className='rounded-full border-green border w-full text-black p-4 py-1 md:flex-grow-2'
                            type="text"
                            name='username'
                            id='usename'
                        />
                        <div className="relative w-full">
                            <input
                                ref={passwordRef}
                                value={form.password}
                                onChange={handleChange}
                                placeholder='Enter Password'
                                className='right-0 rounded-full border-green w-full text-black p-4 py-1 md:flex-grow-1 mouse-pointer select-none'
                                type="password"
                                name='password'
                                id='password'
                            />
                            <span className='absolute right-1 top-1 cursor-pointer select-none' onClick={showPassword}>
                                Show
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={savePassword}
                        className='bg-green-600 font-bold rounded-full hover:bg-green-300 p-3 border-blue-900 border-2'
                        style={{ margin: 'auto' }}
                    >
                        Add Password
                    </button>
                </div>
                <div className='passwords'>
                    <h2 className='font-bold text-2xl py-4 '>Your password</h2>
                    {passwordArray.length === 0 && <div>No password to show</div>}
                    {passwordArray.length !== 0 &&
                        <table className='table-auto md:w-full rounded-md overflow-hidden'>
                            <thead className='bg-green-800 text-white flex-1 overflow-hidden md:w-full'>
                                <tr className='flex-1 '>
                                    <th className='py-2 w-32'>URL</th>
                                    <th className='py-2'>UserName</th>
                                    <th className='py-2'>Password</th>
                                    <th className='py-2 '>Action</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-200 overflow-hidden'>
                                {passwordArray.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className='text-center w-32'>
                                                <a href={item.site} style={{ marginRight: '5px' }}>{item.site}</a>
                                                <i className="fas fa-copy" onClick={() => { copyText(item.site) }}></i>
                                            </td>
                                            <td className='text-center w-32'>
                                                <a href={item.site} style={{ marginRight: '5px' }}>{item.username}</a>
                                                <i className="fas fa-copy" onClick={() => { copyText(item.username) }}></i>
                                            </td>
                                            <td className='text-center py-5 w-32'>
                                                <a href={item.site} style={{ marginRight: '5px' }}>{"*".repeat(item.password.length)}</a>
                                                <i className="fas fa-copy" onClick={() => { copyText(item.password) }}></i>
                                            </td>
                                            <td className='text-center '>
                                                <i className="fa-solid fa-pen-to-square " style={{ marginRight: '10px', marginLeft: '11px' }} onClick={() => { editPassword(item.id) }}
                                                ></i>
                                                <i className="fa-solid fa-delete-left" onClick={() => { deletePassword(item.id) }} ></i>
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
    );
}
export default Manager;

