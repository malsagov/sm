import React from 'react'
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks'

const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
            <div className={s.header}>
                <div className={s.nameBlock}>
                    <div className={s.name}>Руслан Мальсагов</div>
                    <div className={s.online}>online</div>
                </div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div className={s.footer}>
                Друзей: 400
            </div>
        </div>
    )
}

export default ProfileInfo