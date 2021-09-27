import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Feed } from "semantic-ui-react";
import { Postimg } from "./Post";
import { render } from "react-dom";



const Comments = ({post, user}) => {
  const [comments, setComments] = useState([])

  useEffect(()=>{
    getComments()
  },[])

  const getComments = async () => {
    try{
      let res = await axios.get(`/api/users/${user.id}/posts/${post.id}/comments/`)
      console.log(res.data)
      setComments(res.data)
    }catch(err){
      console.log(err)
    }
  }

  const renderComments = () => {
    return comments.map((comment) => {
      if(post.id == comment.post.id){
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
    )}
    else
    return(
    <Card.Meta>
      No comments to display.
    </Card.Meta>
    )
  })}

return (
  <>
  {renderComments()}
  </>
)}

export default Comments