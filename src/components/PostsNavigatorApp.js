/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Divider } from '@material-ui/core';

import { getPosts } from "../actions/posts";

import Autocomplete from './Autocomplete';
import Header from './Header';
import PostView from './PostView';

export const PostsNavigatorApp = ({ getPosts }) => {
  
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Fragment>
      <Header />
      <section className="container">
        <div className="row">
          <Autocomplete />
        </div>
        <Divider />
        <PostView />
      </section>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch, props) => ({
  getPosts: () => dispatch(getPosts())
});

export default connect(undefined, mapDispatchToProps)(PostsNavigatorApp);