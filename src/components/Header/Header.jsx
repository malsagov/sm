import React from 'react' 
import { NavLink } from 'react-router-dom'
import s from'./Header.module.css'

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.block}>
                    <div className={s.logo}>Logo</div>
                    <div className={s.loginBlock}>
                        {props.isAuth 
                            ? <div>{props.login}  <button onClick={props.logout} >Log out</button></div>
                            : <NavLink className={s.login} to={'/login'}>Login</NavLink>
                        }
                    </div>
                </div>
                {/* <img src="https://w7.pngwing.com/pngs/312/1018/png-transparent-orange-blue-and-black-logo-logo-circle-technology-circle-blue-text-information-technology.png"/> */}
            </div>
        </header>
    )
}

export default Header