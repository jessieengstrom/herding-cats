import React from 'react';
import grumpy from '../grumpy.jpg';
import KittyForm from './KittyForm';

class Grumpy extends React.Component {
    render() {
        return (
            <div className='grumpy-image'>
                <img src={grumpy} />
                <KittyForm />
            </div>
        )
    }
}

export default Grumpy;