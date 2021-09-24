import { Form } from 'semantic-ui-react'

return (

  <div>
    <h1>Make a post!</h1>
    <Form onSubmit={}>
      <Form.Input
      value={post}
      onChange={(e, {}) => {
        setPost(value);
      }}
      label={"Post"}
      />
      <MyButton>Post!</MyButton>
    </Form>
  </div>

)

export default PostForm;