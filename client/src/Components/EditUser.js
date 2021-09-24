import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Form } from 'semantic-ui-react'
import MyButton from '../Components/MyButton'
import { AuthContext } from '../providers/AuthProvider'

const EditUser = () => {
  const { user } = useContext(AuthContext)
  const [email, setEmail] = useState(user.email ? user.email : '')
  const [name, setName] = useState(user.name ? user.name : '')
  const [image, setImage] = useState(user.image ? user.image : '')
  const [nickname, setNickname] = useState(user.nickname ? user.nickname : '')

  const [id, setId] = useState(user.id ? user.id : '')

  const handleSubmit = async (e) => {
    try{
      let res = await axios.put(`/api/users/${user.id}`, { name, email, id, image, nickname })
      console.log(res)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <Card>
      <Form onSubmit={handleSubmit}>
      <Form.Input
        value={name}
        onChange={(e, { value }) => {
          setName(value);
        }}
        label={"Name"}
         />
         <Form.Input
        value={nickname}
        onChange={(e, { value }) => {
          setNickname(value);
        }}
        label={"Nickname"}
         />
        <Form.Input
        value={email}
        onChange={(e, { value }) => {
          setEmail(value);
        }}
        label={"Email"}
         />
        <MyButton>Edit</MyButton>
      </Form>
    </Card>
  )
}

export default EditUser