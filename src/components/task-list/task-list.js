import React from 'react';
import './task-list.css';
import CreateTask from './create-task/create-task';
import ItemList from './list/list';

const TaskList = (props) => {
    const { list, actions } = props;

    return (
        <div className="task-list">
            <div className="task-list__create-task">
                <CreateTask actions={actions}></CreateTask>
            </div>
            <div className="task-list__item-list">
                <ItemList tasks={list} actions={actions}></ItemList>
            </div>
        </div>
    );
};

export default TaskList;