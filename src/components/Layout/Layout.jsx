import React from 'react';

import './Layout.scss'
import {AuthorListRedux} from "containers/AuthorListContainer";
import {AuthorForm} from "components/AuthorForm";

export class Layout extends React.Component {

  render() {
    return (
      <div className={'layout'}>
        <AuthorListRedux match={this.props.match}/>
        <AuthorForm />
      </div>
    );
  }
}