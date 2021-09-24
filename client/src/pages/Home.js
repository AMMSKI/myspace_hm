import React, { useContext, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import EditUser from '../Components/EditUser'
import MyButton from '../Components/MyButton'
import { AuthContext } from '../providers/AuthProvider'

const Home = () => {
  const { user } = useContext(AuthContext)
  const [showForm, setShowForm] = useState(true)

  return (
    <>
    <MyButton onClick={()=> setShowForm(!showForm)}> Toggle Form</MyButton>
    {showForm && <EditUser />}
    <div>
      <img src={user.image}/>
    </div>
    <div>
    <Card>
      <Card.Body>
        <Card.Title>
      <p>{user.name}</p>
      </Card.Title>
      <Card.Text>
      <Card.Subtitle>{user.nickname}</Card.Subtitle>
      <p>{user.email}</p>
      <p>{user.id}</p>
      </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default Home