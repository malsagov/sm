import React from 'react'
//redux-form
import { Field, reduxForm } from 'redux-form'



const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                {/* redux-form */}
                <div><Field placeholder={'Login'} name={'login'} component={'input'}/></div>
                <div><Field placeholder={'Password'} name={'password'} component={'input'}/></div>
                <div><Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me</div>
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
        console.log(formData);
    }
    return (
        <div>
            <h2>Login</h2>
            {/* redux-form */}
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login