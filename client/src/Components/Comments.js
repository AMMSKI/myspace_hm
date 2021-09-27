import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Feed } from "semantic-ui-react";
import { Postimg } from "./Post";
import { render } from "react-dom";
import CommentForm from "./CommentForm";



const Comments = ({p, u}) => {
  const [comments, setComments] = useState([])

  useEffect(()=>{
    getComments()
  },[])

  const getComments = async () => {
    try{
      let res = await axios.get(`/api/users/${u.id}/posts/${p.id}/comments/`)
      console.log("comments:", res.data)
      setComments(res.data)
    }catch(err){
      console.log(err)
    }
  }

  const showComment = () => {
    return comments.map((comment) => {
      if(p.id == comment.post.id){
      return(
        <Card.Content>
          <Feed> 
            <Feed.Event>
                <img className="ui avatar image" src={comment.user.image} />
              <Feed.Content>
                <Feed.Summary>
                {comment.user.name}
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          <Card.Content>
            <h6>{comment.text}</h6>
            <Postimg src={comment.image}/>
          </Card.Content>
        </Feed>
      </Card.Content>
      )}})}
      

  const renderComments = () => {
  if(p.id.comments !== null) {
    return(
      <>
      {showComment()}
      </>
    )}
    else {
    return(
    <Card.Meta>
      <p>No comments to display.</p>
    </Card.Meta>
    )
  }}

return (
  <>
  {renderComments()}
  <CommentForm u={u} p={p} comments={comments} setComments={setComments}/>
  </>
)}

export default Comments