import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
          <div className={s.header}>
            <div className={s.author}>
              <a className={s.avatar} href="#">
                <img className={s.img} src="https://sun1.sibirix.userapi.com/s/v1/if2/coZNQpCctyHJQUJGb1MP9vkEl1TBVIV3UOHL0zYQDEanPbzQeRhePIYf5fix_kTr2_US8GEHMHpzi6dIw6xnnf-n.jpg?size=200x0&quality=96&crop=0,362,1536,1536&ava=1"/>
              </a>
              <div className={s.titleWrap}>
                <a className={s.name} href="#">Руслан Мальсагов</a>
                <a className={s.date} href="#">6 сен 2020</a>
              </div>
            </div>
            <div className={s.dropdownWrap}>
              <div className={s.button}></div>
              <div className={s.dropdown}>
                <div className={s.drop}>Удалить запись</div>
                <div className={s.drop}>Отключить комменатрии</div>
              </div>
            </div>
          </div>
          <div className={s.body}>{props.post}</div>
          <div className={s.footer}>
            <div className={s.like} title="Нравиться">+ {props.likes}</div>
          </div>
          {/* <div className="comment"></div> */}
        </div>
    )
  }

export default Post