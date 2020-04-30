import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Material UI
import {
    createMuiTheme,
    ThemeProvider,
    useTheme,
} from '@material-ui/core/styles';

//My Components
import Header from './components/Header';
import HomeGuest from './components/HomeGuest';
import About from './components/About';
import Terms from './components/Terms';
import Footer from './components/Footer';

function Main() {
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
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path='/' exact>
                        <HomeGuest />
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
        </ThemeProvider>
    );
}

ReactDOM.render(<Main />, document.querySelector('#app'));

if (module.hot) {
    module.hot.accept();
}
