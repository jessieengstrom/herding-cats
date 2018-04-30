import React, { Component } from 'react';
import Curious from './Curious';
import Small from './Small';
import Grumpy from './Grumpy';
import '../css/App.css';

class App extends Component {
    state = {
        sname: 'Small',
        cname: 'Curious',
        gname: 'Grumpy',
    }

    handleNameChange = (e, name) => {
        e.preventDefault();
        this.setState({ name: e.target.value });
    }

    render() {
        return (
            <div>
                <Curious name={this.state.cname} nameChange={this.handleNameChange} />
                <Small name={this.state.sname}/>
                <Grumpy name={this.state.gname}/>
            </div>
        );
    }
}

export default App;
