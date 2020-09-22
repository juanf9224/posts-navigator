/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import { startSetPosts } from '../actions/posts';

import Autocomplete from './Autocomplete';
import Header from './Header';

const PostsNavigatorApp = ({ startSetPosts }) => {

  useEffect(() => {
    startSetPosts();
  }, []);

  return (
    <Fragment>
      <Header />
      <section className="container">
        <Autocomplete />
      </section>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch, props) => ({
  startSetPosts: () => dispatch(startSetPosts())
});

export default connect(undefined, mapDispatchToProps)(PostsNavigatorApp);