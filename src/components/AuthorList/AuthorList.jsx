import React from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';
import {Link} from 'react-router-dom';

import './AuthorList.scss'

export class AuthorList extends React.Component {

    render() {
        const {authors} = this.props;
        return (
            <List>
                {authors.map((item) => (
                    <ListItem key={item.id}>
                        <Link to={item.link}>
                            <ListItemText primary={item.name + ': ' + item.booksNumber + ' books'}/>
                        </Link>
                    </ListItem>))}
            </List>
        );
    }
}