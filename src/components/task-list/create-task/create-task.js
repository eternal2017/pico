import React from 'react';
import './create-task.css';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class CreateTask extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            taskName: '',
        };

        this.changeNameTask = this.changeNameTask.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    addTask (event) {
        event.preventDefault();
        this.props.actions.addTask(this.state.taskName);
        this.setState({'taskName': ''});
    }

    changeNameTask (event) {
        this.setState({taskName: event.target.value});
    }

    render () {
        return (
            <Card>
                 <form onSubmit={this.addTask} className="create-task-form">
                    <TextField value={this.state.taskName}
                               onChange={this.changeNameTask}
                               placeholder="Что нужно сделать?"
                               className={"create-task-form__text-field"}
                               variant="outlined" />
                     <Button type="submit" className={"create-task-form__submit-button create-task-form__submit-button_margin"}>Добавить</Button>
                </form>
            </Card>
        )
    }
}

export default CreateTask;