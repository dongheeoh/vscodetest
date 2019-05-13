import React, { Component } from 'react';
import TaskListTemplate from './TaskListTemplate';
import TaskItemList from './TaskItemList';
import './searchInput.css';
import {
    Input, Button, Modal, 
 } from 'antd';

const InputGroup = Input.Group;
class Option2Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks:[
        {id:0 , text: '물가져오기', checked:false},
        {id:1 , text: '커피가져오기', checked:false},
        {id:2 , text: '서류가져오기', checked:false},
        {id:3 , text: '해머가져오기', checked:false},
        {id:4 , text: '신문가져오기', checked:false},
        {id:5 , text: '컴퓨터가져오기', checked:false}
      ],
             value: '',
             visible: false,
             keyword:'',
             count:0
             
      };
};
    

    handleChange=(e)=>{
      console.log(e.target.value);
      this.setState({
        input:e.target.value,
        keyword:e.target.value,
      });
    }

    handleToggle =(id) =>{
      this.setState({  
        visible: true,
        count:this.state.count+1
      });
      const{tasks} = this.state;
      const index=tasks.findIndex(task=>task.id === id);
      const selected = tasks[index];
      
      const nextTasks=[...tasks];
      
      nextTasks[index]={
        ...selected,
        checked:!selected.checked,
      };
  
      this.setState({
        tasks:nextTasks
      });
    }

    showModal = () => {
      this.setState({
        visible: true,
      });
     
    }

    handleOk = (e) => {
      this.setState({  
        visible: false,
        count:this.state.count=0,
      });
    }

    handleCancel = (e) => {
      this.setState({
        value: '',
        count:this.state.count=0,
        visible: false,
        
      });
    }
     
    
    render() {
    const {tasks,keyword}=this.state;
    const filteredList =tasks.filter( info => info.text.indexOf(keyword)!==-1);
    const{ handleToggle}=this;
    const checkTask=tasks.filter(chTask=>chTask.checked.valueOf(true)===true);
    const taskName=checkTask;
      console.log(this.state.tasks.text);
      console.log("task:"+JSON.stringify(checkTask));
      console.log("======>"+this.state.count);
      
      return (
     <div className="information" >
        <div style={{marginBottom:'5px'}}>
        <InputGroup compact>
          <Input  className="up" value="업무선택" style={{ width: '20%',cursor:'default'}} readOnly/>
          <Input style={{ width: '70%' }} autoComplete="off" placeholder="업무" value={JSON.stringify(taskName)} />
          <Button icon="search" style={{ width: '10%' }} onClick={this.showModal} ></Button>
          <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onOk={this.handleOk}
        >
        <div>
        <TaskListTemplate form={<input id="search" placeholder="검색 할 업무 입력" onChange={this.handleChange} value={keyword}/>}>
        <TaskItemList tasks={filteredList} onToggle={handleToggle}  />
        </TaskListTemplate>
      </div>
        </Modal>
        </InputGroup>
        </div>
    </div>
        );
    }
}
 export default Option2Input;