import React from 'react';
import small from '../small.png';
import KittyForm from './KittyForm';

class Small extends React.Component {
    render() {
        let hungrypercent = ''
        if(this.props.name) {
            hungrypercent = `Your kitty is ${this.props.hunger}% hungry`;
        }
        return (
            <div className='small-image'>
                <h1>{this.props.name}</h1>
                <h3>{hungrypercent}</h3>
                <img src={small} />
                <div>
                    {!this.props.isHidden && <KittyForm isHidden={this.props.isHidden} nameChange={this.props.nameChange.bind(this)} />}
                </div>
            </div>
        )
    }
}

export default Small;