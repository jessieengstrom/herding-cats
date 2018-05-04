import React from 'react';
import small from '../small.png';
import KittyForm from './KittyForm';

class Small extends React.Component {
    render() {
        return (
            <div className='small-image'>
                <h1>{this.props.name}</h1>
                 <h3>Your kitty is {this.props.hunger}% hungry</h3>
                <img src={small} />
                <KittyForm nameChange={this.props.nameChange.bind(this)} />
            </div>
        )
    }
}

export default Small;