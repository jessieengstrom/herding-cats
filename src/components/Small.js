import React from 'react';
import small from '../small.png';
import KittyForm from './KittyForm';

class Small extends React.Component {
    render() {
        return (
            <div className='small-image'>
                <img src={small} />
                <KittyForm />
            </div>
        )
    }
}

export default Small;