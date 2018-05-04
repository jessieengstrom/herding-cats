import React from 'react';
import grumpy from '../grumpy.jpg';
import KittyForm from './KittyForm';

class Grumpy extends React.Component {
    render() {
        return (
            <div className='grumpy-image'>
                <h1>{this.props.name}</h1>
                 <h3>Your kitty is {this.props.hunger}% hungry</h3>
                <img src={grumpy} />
                <KittyForm nameChange={this.props.nameChange.bind(this)} />
            </div>
        )
    }
}

export default Grumpy;