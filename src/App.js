import React from 'react' 
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {initializeApp} from './redux/app-ruducer'
import Preloader from './components/common/Preloader';

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
              {/* <Route path="/profile" component={Profile}/>
              <Route path="/dialogs" component={Dialogs}/> */}
              <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
              <Route path="/dialogs" render={() => <DialogsContainer />}/>
              <Route path="/users" render={() => <UsersContainer />}/>
              <Route path="/login" render={() => <Login />}/>
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
