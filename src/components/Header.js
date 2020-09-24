import React from "react";
import { withStyles } from "@material-ui/core";

export const styles = () => ({
  header__title: {
    color: '#f7f7f7',
    fontWeight: 'bold',
    fontSize: '1.5rem'
  },
});

const Header = ({ classes }) => (
  <header className="header">
    <div className={classes.header__title}>
      <h1>Posts Navigator</h1>
    </div>
  </header>
);

export default withStyles(styles)(Header);
