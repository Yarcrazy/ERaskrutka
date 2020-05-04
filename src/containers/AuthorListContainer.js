import React from 'react';
import {connect} from 'react-redux';

import {AuthorList} from 'components/AuthorList';
import {authorsLoad} from 'actions/authors';

class AuthorListContainer extends React.Component {

    state = {
        isLoaded: false,
    }

    componentDidMount() {
        const {loadAuthors} = this.props;
        setTimeout(() => {
            fetch('/api/data.json')
                .then(response => response.json())
                .then(json => loadAuthors(json))
                .catch(error => console.log(error))
                .finally(() => this.setState({isLoaded: true}))
        }, 2000)
    }

    render(){
        const {authors, books, authorName} = this.props;
        const {isLoaded} = this.state;
        return (
            isLoaded ? <AuthorList authors={authors} books={books} authorName={authorName}/>
            : <h1>Loading...</h1>
        );
    }
}

function mapStateToProps(state, ownProps){
    const authors = state.authors.entries;
    const {match} = ownProps;

    let books = null;
    let authorName = null;
    if (match && authors[match.params.id]) {
        books = authors[match.params.id].books;
        authorName = authors[match.params.id].name;
    }

    let authorsArrayForShow = [];
    for(let key in authors){
        if(authors.hasOwnProperty(key)){
            authorsArrayForShow.push({name: authors[key].name, link: `/author/${key}`, booksNumber: authors[key].books.length});
        }
    }

    return {
        authors: authorsArrayForShow,
        books,
        authorName: authorName,
    };
}

function mapDispatchToProps(dispatch){
    return {
        loadAuthors: (data) => dispatch(authorsLoad(data)),
    }
}

export const AuthorListRedux = connect(mapStateToProps, mapDispatchToProps)(AuthorListContainer);