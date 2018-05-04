import React from 'react';

class KittyForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        let name = this.refs.kname.value;
        if(name) {
            this.refs.kname.value = '';
            this.props.nameChange(name);
        }
    }

    render() {
        return (
            <div>
                <form className='kitty-form' onSubmit={this.handleSubmit.bind(this)}>
                    <input type='text' ref='kname' placeholder='Kitty Name' />
                    <input type='submit' value='Adopt Kitty' />
                </form>
            </div>
        )
    }
}

export default KittyForm;