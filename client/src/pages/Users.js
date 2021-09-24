import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import MyLoader from '../Components/MyLoader'
import useAxiosOnMount from '../hooks/useAxiosOnMount'


const Users = () => {
  const [users, setUsers] = useState([])


  useEffect(()=>{
    getUsers()
  },[])

  const getUsers = async () => {
    try{
      let res = await axios.get('/api/users')
      console.log(res)
      setUsers(res.data)
    }catch(err){
      console.log(err)
    }
  }

  const renderUsers = () => {
     return users.map((u)=> {
    return (
      <Card style={{width: '18em'}}>
        <Card.Img src={'https://robohash.org/honey?set=set1'}/>
      <Card.Body>
        <Card.Title>
      <h1>{u.email}</h1>
      </Card.Title>
      <Card.Text>
      <p>{u.id}</p>
      </Card.Text>
      </Card.Body>
    </Card>
    )
  })
  }

  return (
    <div>
       {renderUsers()}
    </div>
  )
  
}

export default Users