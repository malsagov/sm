import React from 'react' 
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { Route } from 'react-router-dom';

const App = (props) => {
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



export default App;
