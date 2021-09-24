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
        <Card.Img src={u.image}/>
      <Card.Body>
        <Card.Title>
      <h1>{u.name}</h1>
      <Card.Subtitle>{u.nickname}</Card.Subtitle>
      </Card.Title>
      <Card.Text>
      <p>{u.email}</p>
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