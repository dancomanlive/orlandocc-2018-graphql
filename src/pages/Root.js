import React from 'react';
import { withStyles } from 'material-ui/styles';
import { compose } from 'recompose';
import connectAsAuthenticated from '../redux/connectors/connectAsAuthenticated';

const styles = {
  root: {
    flexGrow: 1,
  }
};

class Root extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        TODO: Root
      </div>
    );
  }
}

const enhance = compose(
  connectAsAuthenticated,
  withStyles(styles)
);

export default enhance(Root);
