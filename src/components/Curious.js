import React from 'react';
import curious from '../curious.jpg';

class Curious extends React.Component {
    render() {
        return (
            <div className='curious-image'>
                <img src={curious} />
            </div>
        )
    }
}

export default Curious