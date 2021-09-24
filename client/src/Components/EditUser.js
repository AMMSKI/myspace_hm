import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Form } from 'semantic-ui-react'
import MyButton from '../Components/MyButton'
import { AuthContext } from '../providers/AuthProvider'

const EditUser = () => {
  const { user } = useContext(AuthContext)
  const [email, setEmail] = useState(user.email ? user.email : '')
  const [name, setName] = useState(user.name ? user.name : '')
  const [id, setId] = useState(user.id ? user.id : '')

  const handleSubmit = async ({ name, email, }) => {
    try{
      let res = await axios.put(`/api/users/${user.id}`, { name, email, id })
      console.log(res)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
      <Form.Input
        value={name}
        onChange={(e, { value }) => {
          setName(value);
        }}
        label={"Name"}
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
    </div>
  )
}

export default EditUser