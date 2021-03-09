import React from 'react'
import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deactivateEditMode = (e) => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({status: e.target.value})
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                { !this.state.editMode && 
                    <div onClick={this.activateEditMode} className={s.statusText}>{this.props.status || 'изменить статус'}</div>
                }
                { this.state.editMode && 
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} className={s.status} value={this.state.status}/>
                }
            </div>
        )
    }
}

export default ProfileStatus