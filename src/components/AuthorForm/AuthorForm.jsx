import React from 'react';

import './AuthorForm.scss'

export class AuthorForm extends React.Component {

    render() {
        return (
            <form>
                <input type="text" name={'name'} placeholder='Enter author name'/>
                <button type='submit'>Send</button>
            </form>
        );
    }
}