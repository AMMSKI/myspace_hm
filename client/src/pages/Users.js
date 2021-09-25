import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
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
      <Col sm='auto' md='auto' lg='auto' >
      <Card fluid='md' style={{width: '18em', height:'400px', margin:'10px'}}>
        <Card.Img style={{height:'250px', width:'250px', borderRadius:'200px', objectFit:'contain'}} src={u.image}/>
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
    </Col>
    )
  })
  }

  return (
    <Container  fluid='md' style={{textAlign:'center', marginTop:'10vh'}}>
      <h1 style={{color:'white'}}>Users</h1>
    <Row style={{justifyContent:'space-between'}}>
       {renderUsers()}
    </Row>
    </Container>
  )
  
}



export default Users