import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Card, Button, Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import EditUser from '../Components/EditUser'
import MyButton from '../Components/MyButton'
import PostForm from '../Components/PostForm'
import Posts from '../Components/Posts'
import { AuthContext } from '../providers/AuthProvider'

const Home = () => {
  const { user } = useContext(AuthContext)
  const [showForm, setShowForm] = useState(false)  
  const [friendIds, setFriendIds] = useState([])
  const [friends, setFriends] = useState([])
  const [users, setUsers] = useState([])
  
  const deleteUser = async () => {
    try {
      await axios.delete(`/api/users/${user.id}`)
      window.location.reload();
    } catch {
      alert("Blast!  He got away!")
    }
  }

  useEffect(()=>{
    getFriends()
    getUsers()
  },[])

  const getFriends = async () => {
    try{
      let res = await axios.get('/api/user/friends')
      setFriendIds(res.data)
      console.log('friends log',res.data)
    }catch(err){
    }
  }

  const getUsers = async () => {
    try{
      let res = await axios.get('/api/users')
      console.log('users home',res)
      setUsers(res.data)
    }catch(err){
      console.log(err)
    }
  }

  const renderFriends = () => {
    return users.map((u) => {
      if(friendIds.includes(u.id)){
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
              </Card.Body>
              <Link to={{pathname:`/user/${u.id}`, user: {u} }}><MyButton>View Profile</MyButton></Link>
            </Card>
          </Col>
        )
      }
    })
  }

  const forceAlignment = user.force_alignment


    if(showForm){
      return (
    <Container  fluid='md' style={{textAlign:'center', marginTop:'10vh'}}>
      <MyButton onClick={()=> setShowForm(!showForm)}> Close </MyButton>
      {showForm && <EditUser />}
    </Container>
      )
    }else{
      return (
      <Container  fluid='md' style={{textAlign:'center', marginTop:'10vh'}}>
        <MyButton onClick={()=> setShowForm(!showForm)}> Edit Info </MyButton>
        <MyButton onClick={()=> deleteUser(user.id)}> Delete Profile </MyButton>
          <Row>
            <Card>
              <Card.Body>
                <Myimg src={user.image}/>
                <Card.Title>
                  <p>{user.name}</p>
                </Card.Title>
                <Card.Text>
                  <Card.Subtitle>{user.nickname}</Card.Subtitle>
                  <p>{user.email}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        <Row>
          <Col>
            <PostForm user={user}/>
            <Posts x={true} user={user}/>
          </Col>
          <Col sm='auto' md='auto' lg='auto' style={{margin:'10px'}}>
            <Card>
              <h1>Friends:</h1>
            </Card>
            <div  style={{textAlign:'center', float:'right'}}>
              {renderFriends()}
            </div>
          </Col>
        </Row>
      </Container>
  )}
}

const Myimg = styled.img`
  width: 18em;
  border-radius: 200px;
`

export default Home