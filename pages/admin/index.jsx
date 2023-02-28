import React from 'react'
import { StateContext } from "../..//context/index";
import { useContext, useState } from "react";

export default function AdminMain() {

    const { user, pageLoading = true } = useContext(StateContext)


console.log('user', user?.email)

  return (
    <div>AdminMain </div>
  )
}
