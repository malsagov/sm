import React from 'react'
import s from './ProfileAvatar.module.css'

// "https://sun1.sibirix.userapi.com/s/v1/if2/coZNQpCctyHJQUJGb1MP9vkEl1TBVIV3UOHL0zYQDEanPbzQeRhePIYf5fix_kTr2_US8GEHMHpzi6dIw6xnnf-n.jpg?size=200x0&quality=96&crop=0,362,1536,1536&ava=1"
const ProfileAvatar = (props) => {
    return (
        <div className={s.avatarWrap}>
            <div className={s.avatarSettings}>
              <img className={s.avatar} src={props.profile.photos.large || 'https://vk.com/images/camera_200.png'} />
            </div>
        </div>
    )
  }

export default ProfileAvatar