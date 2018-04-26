import React, { Component } from 'react';
import Curious from './Curious';
import Small from './Small';
import Grumpy from './Grumpy';
import '../css/App.css';

class App extends Component {
    state = {
        sname: null,
        cname: null,
        gname: null,
    }

    handleNameChange = (e, name) => {
        e.preventDefault();
        this.setState({name: e.target.value});
    }

    render() {
        return (
            <div>
                <Curious name={this.state.cname} nameChange={this.handleNameChange} />
                <Small />
                <Grumpy />
            </div>
        );
    }
}

export default App;
