import React from 'react';
import './TaskListTemplate.css';

const TaskListTemplate =({form,children})=>{
    return(
        <main className="task-list-template">
            <div className="title">
                업무선택하기
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="task-wrapper">
                {children}
            </section>
        </main>
    );
};

export default TaskListTemplate;