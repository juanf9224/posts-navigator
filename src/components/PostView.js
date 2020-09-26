/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect, useRef } from "react";
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';

import selectPosts from '../selectors/posts';
import PostDetail from './PostDetail';
import PostEdit from './PostEdit';
import { setPaginationFilters } from "../actions/filters";
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => createStyles({
  paginationContainer: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    margin: '0.5rem 0'
  },
  paginationContainer__nav: {
    width: 'fit-content',
    display: 'inline-block'
  }
}));

export const PostView = ({ filterResults, totalItems, pagination, setPaginationFilters }) => {
  const [items, setItems] = useState([]);
  const paginatorRef = useRef(null);
  const classes = useStyles();
  const { pageNumber, itemsPerPage, total } = pagination;

  useEffect(() => {
    const { posts, matching } = filterResults;
    if (posts && posts.length) {
      // create post detail elements
      const arr = posts.map((p) => <PostDetail key={p.id} {...p} />);
      setItems(arr)
      maybeUpdatePagination(matching && matching.length);
    }
  }, [filterResults]);

  /**
   * Decides if an update to pagination should happen
   * @ {number} matching
   */
  const maybeUpdatePagination= (matching) => {    
    const totalP = matching || totalItems;
    const pages = totalP / itemsPerPage;
    const paginator = paginatorRef.current;
    const shouldResetPageNumber = pages < pageNumber;
    if (totalP !== total) {
      // update pagination filters
      setPaginationFilters({
        ...pagination,
        pageNumber: shouldResetPageNumber ? 1 : pageNumber,
        total: totalP,
      });
      // update pagination count
      if (paginator && paginator.count !== pages) {
        paginator.count = pages > 1 ? Math.floor(pages) : 1;        
      }
      // update pagination page
      if (shouldResetPageNumber) {
        paginator.page = 1;
      }
    }
  }

  const handlePaginationChange = (e, value) => {
    setPaginationFilters({ ...pagination, pageNumber: value });
    // scroll to top when page changes
    window.scrollTo(0, 0);
  };

  return (
    <Fragment>
      {items.length ? (
        <Fragment>
          <Grid container justify="center" spacing={2}>
            {items.length ? items : null}
            <div className={classes.paginationContainer}>
              <Pagination
                innerRef={paginatorRef}
                className={classes.paginationContainer__nav}
                color="primary"
                page={pageNumber}
                count={
                  total / itemsPerPage > 1
                    ? Math.floor(total / itemsPerPage)
                    : 1
                }
                onChange={handlePaginationChange}
                data-testid="pagination-comp"
              />
            </div>
          </Grid>
          <PostEdit />
        </Fragment>
      ) : (
        <p>No Results Found</p>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    filterResults: selectPosts(state.posts.items, state.filters),
    totalItems: state.posts && state.posts.items && state.posts.items.length,
    pagination: state.filters.pagination,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setPaginationFilters: (config) => dispatch(setPaginationFilters(config)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostView);
