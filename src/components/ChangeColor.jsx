import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changeColor } from './features/Theme';


function ChangeColor() {
    const [color, setColor] = useState('');
    const dispatch = useDispatch();
  return (
    <div>
        <input type="text" onChange={(event)=>{
            setColor(event.target.value)
        }} />
        <Button onClick={()=>{
            dispatch(changeColor(color))
        }}>Change color</Button>
    </div>
  )
}

export default ChangeColor