import React from 'react';
import grumpy from '../grumpy.jpg';
import KittyForm from './KittyForm';

class Grumpy extends React.Component {
    render() {
        let hungrypercent = ''
        if(this.props.name) {
            hungrypercent = `Your kitty is ${this.props.hunger}% hungry`;
        }
        return (
            <div className='grumpy-image'>
                <h1>{this.props.name}</h1>
                 <h3>{hungrypercent}</h3>
                <img src={grumpy} />
                <div>
                    {!this.props.isHidden && <KittyForm isHidden={this.props.isHidden} nameChange={this.props.nameChange.bind(this)} />}
                </div>
            </div>
        )
    }
}

export default Grumpy;