import React from 'react'
import { Field, reduxForm } from 'redux-form'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {required} from '../../../utils/validators/validators'
import {Textarea} from '../../common/FormsControls/FormsControls'

const MyPosts = (props) => {
  
  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  const postsElements = props.posts.map(p => {
    return (
      <Post key={p.id} post={p.post} likes={p.likes}/>
    )
  })
  
    return (
      <div className={s.right}>
        <AddNewPostFormRedux onSubmit={onAddPost} />
        {postsElements}
      </div>
    )
  }

const AddNewPostForm = (props) => {
  return(
    <form className={s.newPost} onSubmit={props.handleSubmit}>
      <Field component={Textarea} className={s.field} name={'newPostText'}  placeholder="Что у вас нового?" validate={[required]}></Field>
      <div className={s.footer}>
        <button className={s.button}>Опубликовать</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)


export default MyPosts