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
            sfood: 0,
            cisHidden: false,
            sisHidden: false,
            gisHidden: false,
        }
    }
    
    curiousNameChange = (name) => {
        this.setState({ cname: name,
                        cisHidden: !this.state.cisHidden
        });
    }

    smallNameChange = (name) => {
        this.setState({ sname: name,
                        sisHidden: !this.state.sisHidden
        });
    }

    grumpyNameChange = (name) => {
        this.setState({ gname: name,
                        gisHidden: !this.state.gisHidden
        });
    }

    render() {
        return (
            <div>
                <Curious isHidden={this.state.cisHidden} hunger={this.state.cfood} name={this.state.cname} nameChange={this.curiousNameChange.bind(this)} />
                <Small isHidden={this.state.sisHidden} hunger={this.state.sfood} name={this.state.sname} nameChange={this.smallNameChange.bind(this)} />
                <Grumpy isHidden={this.state.gisHidden} hunger={this.state.gfood} name={this.state.gname} nameChange={this.grumpyNameChange.bind(this)} />
            </div>
        );
    }
}

export default App;
