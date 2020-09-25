import React from "react";
import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
  header__title: {
    color: '#f7f7f7',
    fontWeight: 'bold',
    fontSize: '1.5rem'
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className="header">
      <div className={classes.header__title}>
        <h1>Posts Navigator</h1>
      </div>
    </header>
  );
};

export default (Header);
