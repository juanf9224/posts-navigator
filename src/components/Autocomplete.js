/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import { makeStyles, createStyles } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';

import useDebounce from '../hooks/use-debounce';
import selectPosts from '../selectors/posts';
import { setTextFilter } from '../actions/filters';

const useStyles = makeStyles(() => createStyles({
  hidden: {
    display: 'none'
  },  
  searchInput: {
    width: '20rem',
    fontSize: '1.4rem'
  },
  btnIcon: {
    fontSize: '2rem'
  }
}));

export const Autocomplete = ({ filterResults, setTextFilter }) => {
  const [filterText, setFilterText] = useState('');
  // debounce hook to avoid too many requests
  const debouncedSearchTerm = useDebounce(filterText, 500);
  const classes = useStyles();
  const { posts } = filterResults;

  useEffect(() => {
    // Perform the post search with a custom hook to debounce
    // and avoid unnecessary queries
    setTextFilter(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  /**
   * Clears the input as well as all state related to the search
   */
  const clearSearch = () => {
    setFilterText('');
    setTextFilter('');
  };

  return (
    <Fragment>
      <Input
        id="search-input"
        placeholder="Search Post"
        value={filterText}
        onChange={(e) => {
          setFilterText(e.target.value);
        }}
        inputProps={{
          list: "item-list",
          "data-testid": "search-input",
          className: classes.searchInput,
        }}
      />
      <IconButton
        color="primary"
        aria-label="clear search"
        onClick={clearSearch}
        className={filterText.length < 1 ? classes.hidden : ""}
      >
        <ClearIcon />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="clear search"
        className={filterText.length ? classes.hidden : ""}
      >
        <SearchIcon className={classes.btnIcon} />
      </IconButton>
      <datalist
        id="item-list"
        data-testid="autocomplete-data-list">
        {posts && posts.length ? (
          posts.map((p) => (
            <option key={p.id} value={p.title}>
              {p.title}
            </option>
          ))
        ) : (
          <p>No Results Found</p>
        )}
      </datalist>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    filterResults: selectPosts(state.posts.items, state.filters),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Autocomplete);