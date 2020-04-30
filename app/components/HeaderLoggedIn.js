import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ExampleContext from '../ExampleContext';

function HeaderLoggedIn(props) {
    const { setLoggedIn } = useContext(ExampleContext);

    const handleLogout = () => {
        setLoggedIn(false);
        localStorage.removeItem('graphandcoToken');
        localStorage.removeItem('graphandcoUsername');
        localStorage.removeItem('graphandcoAvatar');
    };

    return (
        <div className='flex-row my-3 my-md-0'>
            <a href='#' className='text-white mr-2 header-search-icon'>
                <i className='fas fa-search'></i>
            </a>
            <span className='mr-2 header-chat-icon text-white'>
                <i className='fas fa-comment'></i>
                <span className='chat-count-badge text-white'> </span>
            </span>
            <a href='#' className='mr-2'>
                <img
                    className='small-header-avatar'
                    src={localStorage.getItem('graphandcoAvatar')}
                />
            </a>
            <Link className='btn btn-sm btn-success mr-2' to='/create-post'>
                Créer un post
            </Link>
            <button onClick={handleLogout} className='btn btn-sm btn-secondary'>
                Se déconnecter
            </button>
        </div>
    );
}

export default HeaderLoggedIn;
