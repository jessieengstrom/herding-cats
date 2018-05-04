import React, { Component } from 'react';
import Curious from './Curious';
import Small from './Small';
import Grumpy from './Grumpy';
import '../css/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cname: '',
            gname: '',
            sname: '',
            cfood: 0,
            gfood: 0,
            sfood: 0
        }
    }
    
    curiousNameChange = (name) => {
        this.setState({ cname: name });
    }

    smallNameChange = (name) => {
        this.setState({ sname: name });
    }

    grumpyNameChange = (name) => {
        this.setState({ gname: name });
    }

    render() {
        return (
            <div>
                <Curious hunger={this.state.cfood} name={this.state.cname} nameChange={this.curiousNameChange.bind(this)} />
                <Small hunger={this.state.sfood} name={this.state.sname} nameChange={this.smallNameChange.bind(this)} />
                <Grumpy hunger={this.state.gfood} name={this.state.gname} nameChange={this.grumpyNameChange.bind(this)} />
            </div>
        );
    }
}

export default App;
