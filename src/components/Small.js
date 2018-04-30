import React from 'react';
import small from '../small.png';
import KittyForm from './KittyForm';

class Small extends React.Component {
    render() {
        return (
            <div className='small-image'>
                <h1>{this.props.name}</h1>
                <img src={small} />
                <KittyForm />
            </div>
        )
    }
}

export default Small;