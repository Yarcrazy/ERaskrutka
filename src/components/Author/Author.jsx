import React from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';

import './Author.scss'
import {Link} from "react-router-dom";

export class Author extends React.Component {

    render() {
        const {books, name} = this.props;
        return (
            <div>
                <Link to={'/'}>BACK</Link>
                <h2>{name}</h2>
                <List>
                    Books
                    {books.map((item, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={item.title}/>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}