import React from 'react';
import { Link } from 'react-router-dom';
//import Button from '@material-ui/core/Button';

function Header() {
    return (
        <header className='header-bar bg-primary mb-3'>
            <div className='container d-flex flex-column flex-md-row align-items-center p-3'>
                <h4 className='my-0 mr-md-auto font-weight-normal'>
                    <Link to='/' className='text-white'>
                        ComplexApp
                    </Link>
                </h4>
                <form className='mb-0 pt-2 pt-md-0'>
                    <div className='row align-items-center'>
                        <div className='col-md mr-0 pr-md-0 mb-3 mb-md-0'>
                            <input
                                name='username'
                                className='form-control form-control-sm input-dark'
                                type='text'
                                placeholder='Utilisateur'
                                autoComplete='off'
                            />
                        </div>
                        <div className='col-md mr-0 pr-md-0 mb-3 mb-md-0'>
                            <input
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
            </div>
        </header>
    );
}

export default Header;
