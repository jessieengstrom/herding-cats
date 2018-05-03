import React, { Component } from 'react';
import Curious from './Curious';
import Small from './Small';
import Grumpy from './Grumpy';
import '../css/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
    }
    
    nameChange = (name) => {
        this.setState({ name: name });
    }

    render() {
        return (
            <div>
                <Curious name={this.state.name} nameChange={this.nameChange.bind(this)} />
                <Small name={this.state.name}/>
                <Grumpy name={this.state.name}/>
            </div>
        );
    }
}

export default App;
