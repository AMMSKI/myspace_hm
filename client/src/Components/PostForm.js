import axios from 'axios';
import { useEffect, useState } from 'react';
import { Form } from 'semantic-ui-react'
import MyButton from './MyButton';


const PostForm = () => {
  const [post, setPost] = useState('')


  return (
    <div>
      <h1>Make a post!</h1>
      <Form>
        <Form.Input
        value={post}
        onChange={(e, {value}) => {
          setPost(value);
        }}
        label={"Post"}
        />
        <MyButton>Post!</MyButton>
      </Form>
    </div>
    )
}
export default PostForm;