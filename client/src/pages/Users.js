import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, } from 'react-bootstrap'
import MyButton from '../Components/MyButton'
import { Link } from 'react-router-dom'


const Users = () => {
  const [users, setUsers] = useState([])
  // const [userID, setUserID] = useState(null)


  useEffect(()=>{
    getUsers()
  },[])

  const getUsers = async () => {
    try{
      let res = await axios.get('/api/users')
      setUsers(res.data)
    }catch(err){
      console.log(err)
    }
  }

  const addFriend = async (user) => {
    try{
    let res = await axios.put('/api/user/friends', user)
    console.log('ti sis data', res)
    console.log(users)
    alert('Friend Added')
    }catch(err){
      console.log(err)
    }
  }

  const renderUsers = () => {
     return users.map((u)=> {
    return (
      <Col sm='auto' md='auto' lg='auto' style={{margin:'10px'}} >
      <Card fluid='md' style={{width: '18em', height:'100%'}}>
        <Card.Img style={{height:'250px', width:'250px', borderRadius:'200px', objectFit:'contain'}} src={u.image}/>
      <Card.Body>
        <Card.Title>
      <h1>{u.name}</h1>
      <Card.Subtitle>{u.nickname}</Card.Subtitle>
      </Card.Title>
      <Card.Text>
      <p>{u.email}</p>
      </Card.Text>
      <MyButton onClick={()=> addFriend(u)}>Add Friend</MyButton>
      <Link to={{pathname:`/user/${u.id}`, user: {u} }}><MyButton>View Profile</MyButton></Link>
      </Card.Body>
    </Card>
    </Col>
    )
  }) 
  }

  return (
    <Container  fluid='md' style={{textAlign:'center', marginTop:'10vh'}}>
      <h1 style={{color:"#1AADB7"}}>Users</h1>
    <Row style={{justifyContent:'space-between'}}>
       {renderUsers()}
    </Row>
    </Container>
  )
  
}



export default Users