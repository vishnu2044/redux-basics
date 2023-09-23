
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/User';
import { Button } from 'react-bootstrap'



function Login() {
    const dispatch = useDispatch()

  return (
    <div>
        <h2 >Login</h2>
        
        <Button onClick={()=> {
            dispatch(login({
                name: "vishnu",
                age : 23,
                email : "vishnunarayanan2044@gmai.com"
            }))
            }} >Login</Button>

    </div>
  )
}

export default Login