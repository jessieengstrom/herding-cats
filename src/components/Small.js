import React from 'react';
import small from '../small.png'

class Small extends React.Component {
    render() {
        return (
            <div className='small-image'>
                <img src={small} />
            </div>
        )
    }
}

export default Small;