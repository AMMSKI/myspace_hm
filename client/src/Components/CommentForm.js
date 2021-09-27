import React, { useState, useContext } from "react";
import { Card, Form } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import MyBabyButton from "./MyBabyButton";
import axios from "axios";


const CommentForm = ({p, u, setComments, comments}) => {
  const [commentText, setCommentText] = useState("")
  const [commentImage, setCommentImage] = useState("")
  const { user } = useContext(AuthContext)

  const addComment = async () => {
    let comment = { text: commentText,
      image: commentImage,
      post_id: p.id,
      user_id: user.id
    }
    setComments(...comments, comment)
    try {
      await axios.post(`/api/users/${u.id}/posts/${p.id}/comments/`, comment)
    } catch(err) {
      console.log(err)
    }
  }

  return (
      <Card.Content>
      <Form onSubmit={addComment}>

        <Form.Input
        value={commentText}
        onChange={(e) => {
          setCommentText(e.target.value)}}
        label="Add a comment to this post"
        placeholder={'Your comment here...'}
        />

        <Form.Input
        type="url"
        value={commentImage}
        onChange={(e) => {
          setCommentImage(e.target.value);
        }}
        placeholder={"Add an image to your comment"}
        />


        <MyBabyButton>Post!</MyBabyButton>
      </Form>
      </Card.Content>
    )
}

export default CommentForm;