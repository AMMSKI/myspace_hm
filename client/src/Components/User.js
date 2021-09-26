import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, } from 'react-bootstrap'
import { Feed } from "semantic-ui-react";
import styled from "styled-components";
import MyButton from "./MyButton";
import Posts from "./Posts";


const User = (props) => {
  const [user, setUser] = useState(props.location.user.u)
  console.log(props.location.user.u)

  const addFriend = async (user) => {
    try{
    let res = await axios.put('/api/user/friends', user)
    alert('Friend Added')
    console.log('ti sis data', res)
    }catch(err){
      console.log(err)
    }
  }

      return (
        
      <Container  fluid='md' style={{textAlign:'center', marginTop:'10vh'}}>
      <MyButton onClick={()=> addFriend(user)}>Add Friend</MyButton>
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
          <Col sm='auto' md='auto' lg='auto' style={{margin:'10px'}}>
            {renderUserPosts()}
          </Col>
        </Row>
      </Container>
  )
}

const Myimg = styled.img`
  width: 18em;
  border-radius: 200px;
`

const Postimg = styled.img`
max-width: 100%;
max-height: 100%;
`

export default User