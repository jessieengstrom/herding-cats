import React from 'react';
import curious from '../curious.jpg';
import KittyForm from './KittyForm';

class Curious extends React.Component {
    render() {
        return (
            <div className='curious-image'>
                <h1>{this.props.name}</h1>
                <img src={curious} />
                <KittyForm kittyname='name' nameChange={this.props.nameChange.bind(this)} />
            </div>
        )
    }
}

export default Curious