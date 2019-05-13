import React,{Component} from 'react';
import PhoneInfoList from './components/PhoneInfoList';
import './App.css';


class App extends Component{
  state={
    information:[
      {
        id:0,
        task:'커피타오기'
      },
      {
        id:1,
        task:'물가져오기'
      },
      {
        id:2,
        task:'신문가져오기'
      },
      {
        id:3,
        task:'의자정리'
      }
    ],
    keyword:''
  }
  handleChange=(e)=>{
    this.setState({
      keyword: e.target.value,
    });
  }
  handleCreate = (data) => {
    const {information} =this.state;
    this.setState({
      information: information.concat({
        id:this.id++,
        ...data
      })
    })
  }
 
  
  render(){
    const{information, keyword}=this.state;
    const filteredList = information.filter(
      info => info.task.indexOf(keyword) !== -1
    );
    return(
      <div>
        <p>
          <input
            placeholder="검색 할 업무를 입력하세요.."
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <hr />
        <PhoneInfoList 
          data={filteredList}
          />
      </div>
    );
  }
}

export default App;
