import React from 'react' 
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {initializeApp} from './redux/app-ruducer'
import Preloader from './components/common/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const Login = React.lazy(() => import('./components/Login/Login'))
class App extends React.Component {
  componentDidMount = () => {
    this.props.initializeApp()
  }
  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <div className="main">
          <div className="container">
            <div className="main-block">
              <Sidebar />
              {/* React.suspense + react.lazy для медленной догрузки страницы */}
               <React.Suspense fallback={<Preloader />}>
                <Switch>
                  <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
                  <Route path="/dialogs" render={() => <DialogsContainer />}/>
                  <Route path="/users" render={() => <UsersContainer />}/>
                  <Route path="/login" render={() => <Login />}/>
                </Switch>
              </React.Suspense>
            </div>
          </div>
        </div>
      </div>
    )
  } 
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, { initializeApp })(App)
