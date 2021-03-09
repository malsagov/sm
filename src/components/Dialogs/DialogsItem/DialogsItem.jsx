import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './DialogsItem.module.css'

const DialogsItem = (props) => {
    return (
      <NavLink className={s.item} to={`/Messages`}>
        <div className={s.author}>
          <img
            className={s.avatar}
            src="https://sun1.sibirix.userapi.com/s/v1/if2/coZNQpCctyHJQUJGb1MP9vkEl1TBVIV3UOHL0zYQDEanPbzQeRhePIYf5fix_kTr2_US8GEHMHpzi6dIw6xnnf-n.jpg?size=200x0&quality=96&crop=0,362,1536,1536&ava=1"
            alt=""
          />
          <div className={s.messageBlock}>
            <div className={s.name}>{props.name}</div>
            <div className={s.message}>{props.message}</div>
          </div>
        </div>
      </NavLink>
    );
}



export default DialogsItem