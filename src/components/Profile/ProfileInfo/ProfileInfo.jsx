import React from 'react'
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks'

const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
            <div className={s.header}>
                <div className={s.nameBlock}>
                    <div className={s.name}>{props.profile.fullName}</div>
                    <div className={s.online}>online</div>
                </div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div className={s.middle}>
                <div>
                    <b>Ищу работу:</b> {props.profile.lookingForAJob ? 'да' : 'нет'}
                </div>
                {   props.profile.lookingForAJob &&
                    <div>
                        <b>My professional skills:</b> {props.profile.lookingForAJobDescription}
                    </div>
                }
                <div>
                    <b>Обо мне:</b> {props.profile.aboutMe}
                </div>
            </div>
            <div className={s.footer}>
                Друзей: 400
            </div>
        </div>
    )
}



export default ProfileInfo