import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Page from './Page';
import Axios from 'axios';
import ExampleContext from '../ExampleContext';

function CreatePost(props) {
    const [wasSuccessful, setWasSuccessful] = useState();
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const { addFlashMessage } = useContext(ExampleContext);

    const handlePostSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post('/create-post', {
                title,
                body,
                token: localStorage.getItem('graphandcoToken'),
            });
            setWasSuccessful(response.data);
        } catch (e) {
            console.log('Il y a eu un problème');
        }
    };

    if (wasSuccessful) {
        addFlashMessage('Votre post a bien été créé !');
        return <Redirect to={`/post/${wasSuccessful}`} />;
    }

    return (
        <Page title='Créer un nouveau post'>
            <form onSubmit={handlePostSubmit}>
                <div className='form-group'>
                    <label htmlFor='post-title' className='text-muted mb-1'>
                        <small>Title</small>
                    </label>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        autoFocus
                        name='title'
                        id='post-title'
                        className='form-control form-control-lg form-control-title'
                        type='text'
                        placeholder=''
                        autoComplete='off'
                    />
                </div>

                <div className='form-group'>
                    <label
                        htmlFor='post-body'
                        className='text-muted mb-1 d-block'
                    >
                        <small>Body Content</small>
                    </label>
                    <textarea
                        onChange={(e) => setBody(e.target.value)}
                        name='body'
                        id='post-body'
                        className='body-content tall-textarea form-control'
                        type='text'
                    ></textarea>
                </div>

                <button className='btn btn-primary'>Save New Post</button>
            </form>
        </Page>
    );
}

export default CreatePost;
