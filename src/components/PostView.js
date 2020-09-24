import React, { Fragment, useState, useEffect } from "react";
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import selectPosts from '../selectors/posts';
import PostDetail from './PostDetail';
import PostEdit from './PostEdit';

export const PostView = ({ posts }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (posts && posts.length) {
      const arr = posts.map((p) => (
        <PostDetail key={p.id} {...p} data-testid="post-detail"/>
      ));
      setItems(arr);
    }
  }, [posts]);

  return (
    <Fragment>
      {
        items.length ? (
          <Fragment>
            <Grid container justify="center" spacing={2}>
              {items.length ? items : null}
            </Grid>
            <PostEdit />
          </Fragment>
        ) : (<p>No Results Found</p>)
      }
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: selectPosts(state.posts.items, state.filters)
  };
};

export default connect(mapStateToProps)(PostView);
