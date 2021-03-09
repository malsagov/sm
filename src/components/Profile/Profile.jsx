import React from 'react'
import ProfileAvatar from './ProfileAvatar/ProfileAvatar'
import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Preloader from '../common/Preloader'

const Profile = (props) => {
    if (!props.profile){
      return <Preloader />
    }
    return (
        <div className={s.pageBody}>
          <div className={s.left}>
            <ProfileAvatar profile={props.profile} />
          </div>
          <div className={s.right}>
            <ProfileInfo status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
          </div>
        </div>
    )
  }

export default Profile