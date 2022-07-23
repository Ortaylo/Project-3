import React from "react";
import { useMutation } from '@apollo/client';
const {ADD_USER} = require('../utils/mutations')
export default function Header() {
    const [addUser, {data,loading, error }] = useMutation(ADD_USER);

  const test = async () => {
    await addUser({variables: {username: 'TestUser', email: 'test@email.com', password: 'testPassword'}})
    if(loading) {
        console.log(loading)
    } else {
        console.log(data)
        console.log(error)
    }

  }
    return (
    <div>
        <button onClick={test}>CLICK</button>
    </div>
)
}