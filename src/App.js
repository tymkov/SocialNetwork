import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className = 'app-wrapper'>
                <Header />
                <Navbar navMenuData={props.store.getNavMenuState()}/>
                <main className = 'app-wrapper-content'>
                    <Route path='/dialogs' render={ () => <Dialogs store={props.store} />}/>
                    <Route path='/profile' render={ () => <Profile state={props.store.getProfileState()} textForTextbox={props.store.getTextInTextbox()} dispatch={props.store.dispatch.bind(props.store)}/>} />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
