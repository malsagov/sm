import React from 'react'
import { connect } from 'react-redux'
//redux-form
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { Input } from '../common/FormsControls/FormsControls'
import {login, logout} from '../../redux/auth-ruducer'
import { Redirect } from 'react-router-dom'
import s from '../common/FormsControls/FormsControls.module.css'


const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                {/* redux-form */}
                <div><Field validate={[required]} placeholder={'email'} name={'email'} component={Input}/></div>
                <div><Field validate={[required]} placeholder={'password'} name={'password'} component={Input}/></div>
                <div><Field type={'checkbox'} name={'rememberMe'} component={Input}/> remember me</div>
                { props.error && <div className={s.formSummaryError}>{props.error}</div>}
                <div><button type={'submit'}>Login</button></div>
            </form>
        </div>
    )
}

//redux-form
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    //redux-form
    const onSubmit = (formData) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    console.log(props.isAuth)
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h2>Login</h2>
            {/* redux-form */}
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login, logout})(Login)