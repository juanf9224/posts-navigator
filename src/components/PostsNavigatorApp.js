import React, { Fragment } from 'react';

import Autocomplete from './Autocomplete';
import Header from './Header';

const PostsNavigatorApp = () => {

  return (
    <Fragment>
      <Header />
      <section className="container">
        <Autocomplete />
      </section>
    </Fragment>
  );
};

export { PostsNavigatorApp as default };