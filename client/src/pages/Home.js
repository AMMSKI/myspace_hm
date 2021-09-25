import React, { useContext, useState } from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import styled from 'styled-components'
import EditUser from '../Components/EditUser'
import MyButton from '../Components/MyButton'
import PostForm from '../Components/PostForm'
import Posts from '../Components/Posts'
import { AuthContext } from '../providers/AuthProvider'

const Home = () => {
  const { user } = useContext(AuthContext)
  const [showForm, setShowForm] = useState(false)


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
    <div>
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
    <PostForm id={user.id}/>
    <Posts user={user}/>
    </div>
    </Container>
  )}
}

const Myimg = styled.img`
  width: 18em;
  border-radius: 200px;
`

export default Home