import React from 'react';

import './Layout.scss'
import {AuthorList} from "components/AuthorList";
import {AuthorForm} from "components/AuthorForm";

export class Layout extends React.Component {

  render() {
    return (
      <div className={'layout'}>
        <AuthorList />
        <AuthorForm />
      </div>
    );
  }
}