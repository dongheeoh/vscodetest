import React,{Component} from 'react';
import './TaskItem.css';

class TaskItem extends Component{

    shouldComponentUpdate(nextProps){
        return this.props.checked !== nextProps.checked;
    }

    render(){
        const{text, checked, id,onToggle}= this.props;
     
        return(
            <div className="task-item" onClick={()=> onToggle(id)}>
                <div className={`task-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">&#x2713;</div>)
                }
            </div>
        );
    }
}

export default TaskItem;