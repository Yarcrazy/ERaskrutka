import React from 'react';
import {connect} from 'react-redux';

import {AuthorList} from 'components/AuthorList';
import {authorsLoad} from 'actions/authors';

class AuthorListContainer extends React.Component {

    componentDidMount(){
        const {loadAuthors} = this.props;
        loadAuthors();
    }

    render(){
        const {authors} = this.props;

        return (
            <AuthorList authors={authors}/>
        );
    }
}

function mapStateToProps(state, ownProps){
    const authors = state.authors.entries;

    let authorsArrayForShow = [];
    for(let key in authors){
        if(authors.hasOwnProperty(key)){
            authorsArrayForShow.push({name: authors[key].name, link: `/author/${key}`, booksNumber: authors[key].books.length});
        }
    }

    return {
        authors: authorsArrayForShow,
    };
}

function mapDispatchToProps(dispatch){
    return {
        loadAuthors: () => dispatch(authorsLoad()),
    }
}

export const AuthorListRedux = connect(mapStateToProps, mapDispatchToProps)(AuthorListContainer);