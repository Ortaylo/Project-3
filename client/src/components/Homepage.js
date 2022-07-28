import React, { useContext } from "react";
import { useQuery } from '@apollo/client';
import { AuthContext, useAuthContext } from "../context/authContext";

import { LOGIN } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { AuthContext, useAuthContext } from "../context/authContext";

export default function userSearch() {

  const handleUserFormSubmit = async (event) => {
    event.preventDefault();

    var username = event.target.value;
    
    if (username) {
      
    }

  };


  return (

    <form class="user-search">
      <label>Users</label>
      <input name="user" onChange={handleUserFormSubmit}></input>
    </form>

    <form class="recipe-search"

  )

}