import React, {useContext} from "react";
import { useQuery } from '@apollo/client';
const {GET_USERS} = require('../utils/queries')
export default function Header() {
    const {data,loading,error} = useQuery(GET_USERS)
    if(error){
      console.log(error) 
    }
    if(!loading && !error){
      console.log('111',data.users.find(o => o.username === 'TestUser'))
    }

    return (
    <div>
        {context.user && <button onClick={console.log(context)}>LOGOUT</button>}
    </div>
)
} 