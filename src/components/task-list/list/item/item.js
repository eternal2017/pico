import React from 'react';
import './item.css';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            actions: props.actions,
            completed: props.completed,
        };
    }

    completeTask (e, id) {
        e.stopPropagation();
        this.state.actions.changeCompletedForTask(id);
        this.setState({completed: !this.state.completed});
    }

    addClassCompleted (className) {
        return this.state.completed ? `${className} ${className}_completed` : className;
    }

    render () {
        const {id, name} = this.props;
        return (
            <ListItem button className={this.addClassCompleted("task")}>
                <Checkbox checked={this.state.completed} onChange={e => this.completeTask(e, id)} color="default"  className={"task__complete"} />
                <span className={"task__name"}>{name}</span>
                <DeleteIcon onClick={() => this.state.actions.deleteTask(id)} className={"task__delete"}></DeleteIcon>
            </ListItem>
        )
    }
}
Item.defaultProps = {
    name: '',
    completed: false,
};

export default Item;