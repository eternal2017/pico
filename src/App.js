import React, {Component} from 'react';
import './App.css';
import TaskList from './components/task-list/task-list';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as taskActions from "./actions/task-list/actions";
import * as _ from "lodash/object";

class App extends Component {
    render() {
        return (
            <div className="App">
                <TaskList list={_.values(this.props.tasks.taskById)} actions={this.props.taskActions}></TaskList>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        tasks: state.tasks
    }
}
function matchDispatchToProps (dispatch) {
    return {
        taskActions: bindActionCreators(taskActions, dispatch),
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
