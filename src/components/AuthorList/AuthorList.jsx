import React from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';
import {Link} from 'react-router-dom';

import './AuthorList.scss'
import {Author} from "components/Author";

export class AuthorList extends React.Component {

    render() {
        const {authors, books, authorName} = this.props;
        return (
            <div className={'container'}>
                {books
                    ? <Author books={books} name={authorName}/>
                    : <List>
                        {authors.map((item, index) => (
                            <ListItem key={index}>
                                <Link to={item.link}>
                                    <ListItemText primary={item.name + ' '}
                                                  secondary={'Number of books: ' + item.booksNumber}/>
                                </Link>
                            </ListItem>))}
                    </List>
                }
            </div>
        );
    }
}