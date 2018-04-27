import React from 'react';

class KittyForm extends React.Component {
    // nameRef = React.createRef();
    nameChange() {
        this.props.handleNameChange(this.props.kittyname);
    }

    render() {
        return (
            <div>
                <form className='kitty-form'>
                    <input type='text' name='name' placeholder='kitty name' />
                    <input type='submit' value='name kitty' onSubmit={this.nameChange} />
                </form>
            </div>
        )
    }
}

export default KittyForm;