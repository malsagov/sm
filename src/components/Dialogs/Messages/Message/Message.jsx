import React from 'react'
import s from './Message.module.css'

const Message = (props) => {

    return(
      <div className={s.message}>
        <a className={s.avatarLink}>
          <img className={s.avatar} src="https://sun1.sibirix.userapi.com/s/v1/if2/coZNQpCctyHJQUJGb1MP9vkEl1TBVIV3UOHL0zYQDEanPbzQeRhePIYf5fix_kTr2_US8GEHMHpzi6dIw6xnnf-n.jpg?size=200x0&quality=96&crop=0,362,1536,1536&ava=1" alt=""/>
        </a>
        <div className={s.content}>
          <div className={s.title}>
              <a className={s.name}>{props.name}</a>
              <div className={s.date}>18:00</div>
          </div>
          <div className={s.text}>{props.message}</div>
        </div>
      </div>
    )
}

export default Message