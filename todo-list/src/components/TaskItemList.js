import React, {Component} from 'react';
import TaskItem from './TaskItem';

class TaskItemList extends Component{

    shouldComponentUpdate(nextProps){
        return this.props.tasks !== nextProps.todos;
    }

    render(){
        const{tasks,onToggle}=this.props;

        const taskList=tasks.map(
            (task) => (
                <TaskItem
                   {...task}
                    onToggle={onToggle}
                    key={task.id}
                />
            )
        );
        return(
            <div>
                {taskList}
            </div>
        );
    }
}

export default TaskItemList;