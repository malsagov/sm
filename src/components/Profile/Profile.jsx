import React, {useState} from 'react'
import ProfileAvatar from './ProfileAvatar/ProfileAvatar'
import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Preloader from '../common/Preloader'

const Profile = (props) => {
  let [editMode, setEditMode] = useState(false)
  
  if (!props.profile){
    return <Preloader />
  }
    return (
        <div className={s.pageBody}>
          <div className={s.left}>
            <ProfileAvatar toEditMode={() => {setEditMode(true)}} isOwner={props.isOwner} savePhoto={props.savePhoto} profile={props.profile} />
          </div>
          <div className={s.right}>
            {editMode ? <ProfileInfoForm profile={props.profile} /> : <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>}
            <MyPostsContainer />
          </div>
        </div>
    )
}

  const ProfileInfoForm = (props) => {
    return <div>Form</div>
  }

export default Profile