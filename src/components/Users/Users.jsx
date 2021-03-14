import {React, useState} from 'react'
import { NavLink } from 'react-router-dom'
import s from './Users.module.css'
import cn from 'classnames'

let Users = (props) => {
    let portionSize = 10
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    
    let pages = []
    for ( let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [ portionNumber, setPortinNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
    return (
        
        <div>
            { portionNumber > 1 && 
                <button onClick={() => {setPortinNumber(portionNumber - 1)}}>Prev</button>
            }
            <div>
                {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p, i) => {
                    return (<span key={i} className={cn({[s.selectedPage] : props.currentPage === p}, s.pageNumber)} onClick={(e) => {props.onPageChanged(p)}}>{p}</span>)
                })}
            </div>
            { portionCount > portionNumber && 
                <button onClick={() => {setPortinNumber(portionNumber + 1)}}>Next</button>
            }
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