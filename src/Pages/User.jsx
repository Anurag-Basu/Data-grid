import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from '../Components'



const columns = ['id', 'name', "email", "phone", "username" ]
const User = () => {
    const userData = useSelector(state => state.users.users)
  return (
    <>
        {userData && <Table data ={userData} columns={columns}/>}
    </>
  )
}

export default User