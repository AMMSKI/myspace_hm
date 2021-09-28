import axios from "axios";
import React, { useReducer } from "react";

const LikesReducer = ({u, p}) => {

  const saveLikes = async () => {
  try{
  let res = await axios.put(`/api/users/${u.id}/posts/${p.id}`, {
    user_id: u.id,
    text: p.text,
    image: p.image,
    mood: p.mood,
    likes: likes + 1
  });
  console.log("HERE IS RES", res)
  } catch (err) {
    console.log(err)
  }
}

  const likeSave = (e) =>
  {dispatch("add");
  saveLikes(likes)}

  const [likes, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "add":
        return state + 1;
    }
  }, p.likes);

  return (
    <p>
      {likes}
      <i class="heart icon"
       onClick={() => {likeSave()}}/>
    </p>
  );
};

export default LikesReducer;