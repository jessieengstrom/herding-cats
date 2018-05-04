import React from 'react';
import curious from '../curious.jpg';
import KittyForm from './KittyForm';

class Curious extends React.Component {
    checkName = () => {
        if (this.props.name) {
            return (
                <h3>
                    Your kitty is {this.props.hunger}% hungry
                </h3>
            )
        } else {
            return
        }
    }
    render() {
        return (
            <div className='curious-image'>
                <h1>{this.props.name}</h1>
                <h3>{this.checkName}</h3>
                <img src={curious} />
                <KittyForm kittyname='name' nameChange={this.props.nameChange.bind(this)} />
            </div>
        )
    }
}

export default Curious