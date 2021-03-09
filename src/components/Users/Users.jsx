import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Users.module.css'
import {usersAPI} from '../../api/api'

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    
    let pages = []
    for ( let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        
        <div>
            <div>
                {pages.map((p, i) => {
                    return (<span key={i} className={props.currentPage === p ? s.selectedPage : undefined} onClick={(e) => {props.onPageChanged(p)}}>{p}</span>)
                })}
            </div>
            {
                props.users.map(u => {
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                    <NavLink to={`/profile/${u.id}`}>
                                        <img src={u.photos.small || 'https://vk.com/images/camera_200.png'}/>
                                    </NavLink>
                                </div>
                                <div>
                                    {
                                        u.followed 
                                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} id={u.id} onClick={ () => {props.unfollow(u.id)}}>Unfollow</button> 
                                        : <button disabled={props.followingInProgress.some(id => id === u.id)} id={u.id} onClick={ () => {props.follow(u.id)} }>Follow</button>
                                    }
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                                {/* <span>
                                    <div>{u.location.country}</div>
                                    <div>{u.location.city}</div>
                                </span> */}
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users