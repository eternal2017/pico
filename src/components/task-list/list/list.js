import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import Item from './item/item';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 700,
        backgroundColor: theme.palette.background.paper,
    },
});

const ItemList = (props) => {
    const { tasks, actions, classes } = props;
    return (
        <Card>
            <div className={classes.root}>
                <List component="nav">
                    {tasks.map((task) =>
                        <Item key={task.id}
                              id={task.id}
                              name={task.name}
                              completed={task.completed}
                              actions={actions}
                        ></Item>
                    )}
                </List>
            </div>
        </Card>
    );
};
ItemList.defaultProps = {
    items: [],
};
ItemList.propTypes = {
    items: PropTypes.array,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemList);