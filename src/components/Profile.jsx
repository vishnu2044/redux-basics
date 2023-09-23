import React from 'react';
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { logout } from './features/User';


function Profile() {
    const dispatch = useDispatch();
    const user = useSelector((state)=> state.user.value)
    const themeColor = useSelector((state)=>state.theme.value)
  return (
    <div style={{ color: themeColor }}>
        <h3>Profile page</h3>
        <p>Name : {user.name}</p>
        <p>Age : {user.age} </p>
        <p>Email : {user.email} </p>
        <Button onClick={()=> {
            dispatch(logout())
            }}>Logout</Button>
    </div>
  )
}

export default Profile