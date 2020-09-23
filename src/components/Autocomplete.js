/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import AutocompleteContext from '../context/autocomplete';
import useDebounce from '../hooks/use-debounce';
import useOutsideClick from '../hooks/use-outside-click';
import PostList from './PostList';
import PostView from './PostView';
import selectPosts from '../selectors/posts';
import loadingGif from '../assets/gif/loading.gif';
import { startSetPosts } from '../actions/posts';
import { setSelectedPost } from "../actions/selected-post";

const initialActiveSuggestionState = { idx: -1, id: undefined };

export const Autocomplete = ({ posts, selectedPost, setSelectedPost }) => {
  const [filterText, setFilterText] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(undefined);
  const [activeSuggestion, setActiveSuggestion] = useState(
    initialActiveSuggestionState
  );
  const [showPosts, setShowPosts] = useState(undefined);
  const [showPostView, setShowPostView] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const postListContainer = useRef(null);
  const postListRef = useRef(null);

  //handle outside click
  let outsideClicked = useOutsideClick(postListRef);

  // debounce hook to avoid too many requests
  const debouncedSearchTerm = useDebounce(filterText, 500);

  useEffect(() => {
    // Perform the post search with a custom hook to debounce
    // the request and avoid unnecessary calls
    if (debouncedSearchTerm) {
      if (
        !filteredPosts ||
        !filteredPosts.filter((i) => i.title === filterText).length
      ) {
        setIsSearching(true);
        const selectedPosts = selectPosts(posts, debouncedSearchTerm);
        setFilteredPosts(selectedPosts);
        setShowPosts(true);
        setIsSearching(false);
      } else {
        setFilteredPosts([]);
        setShowPosts(false);
      }
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    // If an post was selected, show its details and hide the posts list
    if (selectedPost) {
      setShowPosts(false);
      setShowPostView(true);
    }
  }, [selectedPost]);

  useEffect(() => {
    // Here the scrolling by active suggestion is managed
    // first we have to get the list container reference
    // then we get the list container children to get to the active suggestion
    const list = postListContainer && postListContainer.current;
    const coll = list && list.children.length && list.children[0].children;
    const posts = coll && [...coll];
    const activepost =
      posts.length && posts.find((i) => [...i.classList].includes("is-active"));

    // validate if there is an active suggestion
    if (activepost) {
      // active suggestion coordenates
      const rect = activepost.getClientRects()[0];

      // listContainer coordenates
      const listRect = list.getClientRects()[0];

      // y axis | vertical active suggestion position to be used
      const yDelimeter = rect.y - (listRect.y - 30);

      // If scroll bar is at the top and the delimeter is at the bottom
      // scroll to the bottom
      if (list.scrollTop <= 520 && yDelimeter >= list.scrollHeight - 42) {
        list.scrollTo(null, list.scrollHeight);

        // If the delimeter is in a position greater thatn the containter height
        // scroll down by 42 pixels (this is the size of every list item)
      } else if (yDelimeter > listRect.height) {
        list.scrollBy(null, 42);

        // If yDelimeter is lower than 0 then scroll all the way to the top
      } else if (yDelimeter < 0) {
        list.scrollTo(null, 0);

        // If the scroll bar is out of the delimeter reach, scroll up by 42 pixels
      } else if (yDelimeter < list.scrollTop) {
        list.scrollTo(null, list.scrollTop - 42);
      }
    }
  }, [postListContainer]);

  useEffect(() => {
    setShowPosts(showPosts && !outsideClicked);
  }, [outsideClicked]);

  /**
   * Key down event handler
   * @param {KeyEvent} e
   */
  const handleKeyDown = (e) => {
    // Get the the post index
    const idx = activeSuggestion && activeSuggestion.idx;

    // If the return key was pressed
    if (e.keyCode === 13) {
      e.preventDefault();

      // select the active post
      const selected = idx > -1 && filteredPosts[idx];

      // and update the state
      setFilterText(idx > -1 ? selected.title : filterText);
      setSelectedPost(selected);
    } else if (e.keyCode === 38) {
      // If the up arrow key was pressed
      e.preventDefault();

      // Get the previous post index
      const prevousIdx = idx > 0 ? idx - 1 : filteredPosts.length - 1;

      // and update the state
      setActiveSuggestion({
        idx: prevousIdx,
        id:
          prevousIdx > -1 && filteredPosts && filteredPosts.length
            ? filteredPosts[prevousIdx].id
            : activeSuggestion.id,
      });
    } else if (e.keyCode === 40) {
      // If the up arrow key was pressed
      e.preventDefault();

      // Get the next post index
      const nextIdx = idx < filteredPosts.length - 1 ? idx + 1 : 0;

      // and update the state
      setActiveSuggestion({
        idx: nextIdx,
        id:
          nextIdx > -1 && filteredPosts && filteredPosts.length
            ? filteredPosts[nextIdx].id
            : activeSuggestion.id,
      });
    }
  };

  /**
   * Handler for suggestion click
   * @param {number} id
   * @param {string} title
   */
  const handleSuggestionClick = ({ id, title }) => {
    setShowPosts(false);
    // when a suggestion from the list is clicked
    // update the state to display the clicked post title
    setFilterText(title);

    // Get the index of the selected post
    const idx = filteredPosts.map((i) => i.id).indexOf(id);

    // and get the selected post
    const selected = filteredPosts[idx];

    // and update the state accordingly
    setActiveSuggestion({
      idx,
      id: selected.id,
    });
    setSelectedPost(selected);
  };

  /**
   * Clears the input as well as all state related to the search
   */
  const clearSearch = () => {
    setFilterText("");
    setShowPosts(false);
    setShowPostView(false);
    setSelectedPost(null);
  };

  return (
    <AutocompleteContext.Provider
      value={{
        filteredPosts,
        handleSuggestionClick,
        activeSuggestion,
        selectedPost,
      }}
    >
      <div className="row autocomplete">
        <input
          type="text"
          placeholder="Type the title of the post"
          className="autocomplete__search-box"
          value={filterText}
          onChange={(e) => {
            setFilterText(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          onClick={() => setActiveSuggestion(initialActiveSuggestionState)}
        />
        <button
          className="btn btn-secondary btn-l"
          onClick={clearSearch}
          hidden={filterText.length < 1}
        >
          X
        </button>
      </div>
      <div className="post-list" ref={postListContainer}>
        {showPosts && filteredPosts && filteredPosts.length ? (
          <PostList listRef={postListRef} />
        ) : isSearching ? (
          <img
            src={loadingGif}
            alt="loading..."
            className="post-list__loading-gif"
          />
        ) : showPosts && (!filteredPosts || !filteredPosts.length) ? (
          <p className="posts-list__no-results-msg">No results found</p>
        ) : null}
      </div>
      <div className="row post-view">{showPostView ? <PostView /> : null}</div>
    </AutocompleteContext.Provider>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    selectedPost: state.selectedPost
  }
};

const mapDispatchToProps = (dispatch, props) => ({
  startSetPosts: () => dispatch(startSetPosts()),
  setSelectedPost: (post) => dispatch(setSelectedPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(Autocomplete);