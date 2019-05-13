import React, { Component } from 'react';
import TaskListTemplate from './components/TaskListTemplate';
import TaskItemList from './components/TaskItemList';
import './searchInput.css';

class App extends Component{

  state={
    tasks:[
      {id:0 , text: '물가져오기', checked:false},
      {id:1 , text: '커피가져오기', checked:false},
      {id:2 , text: '서류가져오기', checked:false}
    ],
    keyword:''
  }

  handleChange =(e) => {
    this.setState({
      input:e.target.value,
      keyword:e.target.value
    });
  }


  handleToggle =(id) =>{
    const{tasks} = this.state;
    const index=tasks.findIndex(task=>task.id === id);
    const selected = tasks[index];
    
    const nextTasks=[...tasks];
    
    nextTasks[index]={
      ...selected,
      checked:!selected.checked
    };

    this.setState({
      tasks:nextTasks
    });
  }


  render(){
    const {tasks,keyword}=this.state;
    const filteredList =tasks.filter(
      info => info.text.indexOf(keyword)!==-1
    );
    const{
      handleToggle,
    }=this;
    
    return(
      <div>
       <TaskListTemplate form={<input id="search" placeholder="검색 할 업무 입력" onChange={this.handleChange} value={keyword}/>}>
        <TaskItemList tasks={filteredList} onToggle={handleToggle} />
      </TaskListTemplate>
      </div>
    );
  }
}

export default App;
