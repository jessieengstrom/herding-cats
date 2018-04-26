import React from 'react';

class KittyForm extends React.Component {
    // nameRef = React.createRef();
    render() {
        return (
            <div>
                <form className='kitty-form'>
                    <input type='text' name='name' placeholder='kitty name' />
                    <input type='submit' value='name kitty' onClick={this.handleNameChange} />
                </form>
            </div>
        )
    }
}

export default KittyForm;