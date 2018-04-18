import React from 'react';
import grumpy from '../grumpy.jpg';

class Grumpy extends React.Component {
    render() {
        return (
            <div className='grumpy-image'>
                <img src={grumpy} />
            </div>
        )
    }
}

export default Grumpy;