import React, { useContext } from 'react'
import { UserContext } from '@/app/page'

const ChildThree = () => {

    const user = useContext(UserContext)

  return (
    <>
    <div>HELLO {user.name}</div>
    <div>Class {user.class}</div>
    <div>Day {user.day}</div>
    <div>Timing {user.timing}</div>
    </>
  )
}

export default ChildThree