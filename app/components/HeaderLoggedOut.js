import React, { useEffect, useState, useContext } from 'react';
import Axios from 'axios';
import ExampleContext from '../ExampleContext';

function HeaderLoggedOut(props) {
    const { setLoggedIn } = useContext(ExampleContext);

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post('/login', {
                username,
                password,
            });
            if (response.data) {
                localStorage.setItem('graphandcoToken', response.data.token);
                localStorage.setItem(
                    'graphandcoUsername',
                    response.data.username
                );
                localStorage.setItem('graphandcoAvatar', response.data.avatar);
                setLoggedIn(true);
            } else {
                console.log('Incorrect');
            }
        } catch (e) {
            console.log('il y a eu une erreur');
        }
    };

    return (
        <form onSubmit={handleLogin} className='mb-0 pt-2 pt-md-0'>
            <div className='row align-items-center'>
                <div className='col-md mr-0 pr-md-0 mb-3 mb-md-0'>
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        name='username'
                        className='form-control form-control-sm input-dark'
                        type='text'
                        placeholder='Utilisateur'
                        autoComplete='off'
                    />
                </div>
                <div className='col-md mr-0 pr-md-0 mb-3 mb-md-0'>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        name='password'
                        className='form-control form-control-sm input-dark'
                        type='password'
                        placeholder='Mot de passe'
                    />
                </div>
                <div className='col-md-auto'>
                    <button className='btn btn-success btn-sm'>
                        Se connecter
                    </button>
                    {/* <Button
                    variant='outlined'
                    color='secondary'
                    size='small'
                >
                    Se connecter
                </Button> */}
                </div>
            </div>
        </form>
    );
}

export default HeaderLoggedOut;
