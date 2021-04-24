import React from 'react'
import './index.css';
import Main from './components/Main'
import Logo from './components/menuComponents/Logo'
import Notification from './components/menuComponents/Notification'
import Profile from './components/menuComponents/Profile'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Route exact path="/simple-react-app" component={Main}/>
      <Route exact path="/simple-react-app/logo" component={Logo}/>
      <Route exact path="/simple-react-app/notification" component={Notification}/>
      <Route exact path="/simple-react-app/profile" component={Profile}/>

    </div>
  );
}

export default App;