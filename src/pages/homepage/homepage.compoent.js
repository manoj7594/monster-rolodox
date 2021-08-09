import React from 'react';
import { withRouter } from 'react-router-dom';
import './homepage.style.scss';
import Directory from '../../components/directory/directory.component';

function Homepage() {
    return (
        <div className='homepage'>
            <Directory />
        </div>
    )
}

export default withRouter(Homepage);