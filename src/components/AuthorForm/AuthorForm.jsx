import React from 'react';

import './AuthorForm.scss'

export class AuthorForm extends React.Component {
    state = {
        name: '',
    }

    handleChangeInput = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSendAuthor = (event) => {
        event.preventDefault();
        // так бы я написал запрос к бэку
        // fetch('someURL', {
        //     method: 'POST',
        //     body: JSON.stringify(this.state)
        // })
        //     .finally(response => console.log(response))
        fetch('/api/ok.json')
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(() => console.log('error'))
    }

    render() {
        return (
            <form method='post' onSubmit={this.handleSendAuthor}>
                <input type="text" name={'name'} onChange={this.handleChangeInput} placeholder='Enter author name'/>
                <button type='submit'>Send</button>
            </form>
        );
    }
}