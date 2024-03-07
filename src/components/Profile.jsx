import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { updateUserName } from '../redux/userActions';

export default function Profile() {
    const state  = useSelector((state) => state);
    console.log(state);
    const dispatch = useDispatch();
  return (
    <div>
        <h2>My name is {state.name} </h2>
        <h3>My age is {state.age} </h3>
        <button onClick={()=>dispatch(updateUserName())}>UPDATE NAME</button>
    </div>
  )
}
