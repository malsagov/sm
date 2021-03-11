import React, {useState, useEffect} from 'react'
import s from './ProfileStatus.module.css'

const ProfileStatusWithHooks = (props) => {
    // state = {
    //     editMode: false,
    //     status: this.props.status
    // }

    // activateEditMode = () => {
    //     this.setState({editMode: true})
    // }

    // deactivateEditMode = (e) => {
    //     this.setState({editMode: false})
    //     this.props.updateStatus(this.state.status)
    // }

    // onStatusChange = (e) => {
    //     this.setState({status: e.target.value})
    // }

    // componentDidUpdate = (prevProps, prevState) => {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }

    
    return (
    
        <div>
            { !editMode &&
                <div onClick={activateEditMode} className={s.statusText}>{props.status || 'изменить статус'}</div>
            }
            { editMode && 
                <input onChange={onStatusChange} onBlur={deactivateEditMode}  autoFocus={true} className={s.status} value={status}/>
            }
        </div>
    )
    
}

export default ProfileStatusWithHooks