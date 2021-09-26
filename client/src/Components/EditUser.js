import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import { Form } from 'semantic-ui-react'
import MyButton from '../Components/MyButton'
import { AuthContext } from '../providers/AuthProvider'

const EditUser = () => {
  const { user } = useContext(AuthContext)
  const [name, setName] = useState(user.name ? user.name : '')
  const [image, setImage] = useState(user.image ? user.image : 'https://avatars.dicebear.com/v2/identicon/0412afd0cdaff58533c18fc72c58cc8a.svg')
  const [nickname, setNickname] = useState(user.nickname ? user.nickname : '')

  const [id, setId] = useState(user.id ? user.id : '')

  const handleSubmit = async (e) => {
    try{
      let res = await axios.put(`/api/users/${user.id}`, { name, id, image, nickname })
      console.log(res)
      window.location.reload();
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
        value={image}
        onChange={(e, { value }) => {
          setImage(value);
        }}
        label={"Image as 'url' "}
         />
        <MyButton>Save</MyButton>
      </Form>
    </Card>
  )
}

export default EditUser