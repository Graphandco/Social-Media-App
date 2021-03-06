import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Axios from 'axios';
Axios.defaults.baseURL = 'http://localhost:8080';

//Material UI
import {
    createMuiTheme,
    ThemeProvider,
    useTheme,
} from '@material-ui/core/styles';

//My Components
import Header from './components/Header';
import Home from './components/Home';
import HomeGuest from './components/HomeGuest';
import About from './components/About';
import Terms from './components/Terms';
import Footer from './components/Footer';
import CreatePost from './components/CreatePost';
import ViewSinglePost from './components/ViewSinglePost';
import FlashMessages from './components/FlashMessages';

import ExampleContext from './ExampleContext';

function Main() {
    //States
    const [loggedIn, setLoggedIn] = useState(
        Boolean(localStorage.getItem('graphandcoToken'))
    );
    const [flashMessages, setFlashMessages] = useState([]);

    const addFlashMessage = (msg) => {
        setFlashMessages((prev) => prev.concat(msg));
    };

    //Set Material Theme
    const themes = useTheme();
    const monTheme = createMuiTheme({
        palette: {
            type: 'dark',
            secondary: {
                main: '#FFFFFF',
            },
        },
    });

    return (
        <ThemeProvider theme={monTheme}>
            <ExampleContext.Provider value={{ addFlashMessage, setLoggedIn }}>
                <BrowserRouter>
                    <FlashMessages messages={flashMessages} />
                    <Header loggedIn={loggedIn} />
                    <Switch>
                        <Route path='/' exact>
                            {loggedIn ? <Home /> : <HomeGuest />}
                        </Route>
                        <Route path='/create-post'>
                            <CreatePost />
                        </Route>
                        <Route path='/post/:id'>
                            <ViewSinglePost />
                        </Route>
                        <Route path='/about-us'>
                            <About />
                        </Route>
                        <Route path='/terms'>
                            <Terms />
                        </Route>
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </ExampleContext.Provider>
        </ThemeProvider>
    );
}

ReactDOM.render(<Main />, document.querySelector('#app'));

if (module.hot) {
    module.hot.accept();
}
