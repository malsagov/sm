import React from 'react'
import DialogsItem from './DialogsItem/DialogsItem'
import MessagesContainer from './Messages/MessagesContainer'
import s from './Dialogs.module.css'
import { Redirect } from 'react-router-dom'

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => {
    return (
      <DialogsItem key={d.id} name={d.name} message={d.message} id={d.id}/>
    )
  })

  if (!props.isAuth){
    return <Redirect to={'/login'} />
  }

    return(
        <div className={s.dialogs}>
            <div className={s.items}>
                {dialogsElements}
            </div>
            <MessagesContainer/>
            {/* <div className={s.dialogsMenu}>
              DialogsMenu
            </div> */}
        </div>
    )
}

export default Dialogs