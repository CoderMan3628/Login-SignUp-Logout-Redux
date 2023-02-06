import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

export const Registration = () => {
    const [name,setName]=useState('');
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const dispatch=useDispatch();
    const register=()=>{
        dispatch({
            type:"REGISTER",
            payload:{
                id: (new Date).getTime(),
                name,
                username,
                password
            }
        })
    }
  return (
    <form
    className='register'
    >
        <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
        <input type="text" placeholder='UserName' value={username} onChange={e=>setUsername(e.target.value)} />
        <input type="password" placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} />
        <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} />
        <input type="button" value="register" onClick={register} />
    </form>
  )
}
