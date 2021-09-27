import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Card, Feed } from "semantic-ui-react";
import { Postimg } from "./Post";
import { render } from "react-dom";
import CommentForm from "./CommentForm";
import MyBabyButton from "./MyBabyButton";
import { AuthContext } from "../providers/AuthProvider";



const Comments = ({p, u}) => {
  const [comments, setComments] = useState([])
  const {user} = useContext(AuthContext)

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

  const deleteComment = async (id) => {
  try {
    await axios.delete(`/api/users/${u.id}/posts/${p.id}/comments/${id}`)
    const filterComments = comments.filter((comment) => comment.id !== id);
    setComments(filterComments)
  } catch {
    alert("Are you trying to get us killed!?")
  }
}

 const showDelete = (comment) => {
   if(user.id === comment.user.id) {
     return(
    <MyBabyButton onClick= {()=>deleteComment(comment.id)}>Delete</MyBabyButton> 
     )
 }}

  const showComments = () => {
    return comments.map((comment) => {
      if(p.id === comment.post.id){
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
        <Card.Meta>
        {showDelete(comment)}
        </Card.Meta>
      </Card.Content>
      )}})}
      

  const renderComments = () => {
  if(p.id.comments !== null) {
    return(
      <>
      {showComments()}
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