import React from 'react'
import s from './Messages.module.css'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form'



const Messages = (props) => {

    // const newMessageElement = React.createRef()

    // const onSendMessage = (e) => {
    //   // console.log(e.target)
    //   // const message = e.target.value 
    //   const message = newMessageElement.current.value 
    //   props.sendMessage(message)
    //   newMessageElement.current.value = ''
    // }
    let messageElements = props.messages.map((m) => {
      return (
        <Message name={m.name} message={m.message} id={m.id}/>
      )
    })

    //redux-form
    let addNewMessage = (values) => {
      props.sendMessage(values.newMessageBody)
    }

    return(
        <div className={s.messagesWrap}>
            <div className={s.header}>
              <div className={s.button}>Назад</div>
              <div className={s.name}>Линара Шарипова</div>
              <a className={s.avatarLink}>
                <img className={s.avatar} src="https://sun1.sibirix.userapi.com/s/v1/if2/coZNQpCctyHJQUJGb1MP9vkEl1TBVIV3UOHL0zYQDEanPbzQeRhePIYf5fix_kTr2_US8GEHMHpzi6dIw6xnnf-n.jpg?size=200x0&quality=96&crop=0,362,1536,1536&ava=1" alt=""/>
              </a>
            </div>
            <div className={s.messages}>
              {messageElements}
            </div>
            {/* redux-form */}
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}

//redux-form
const AddMessageForm = (props) => {
  return (
    <form className={s.footer} onSubmit={props.handleSubmit}>
      <Field component={'input'} name={'newMessageBody'} className={s.input} placeholder="Напишите сообщение..."/>
      <button className={s.send}>Send</button>
    </form>
  )
}

//redux-form
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Messages