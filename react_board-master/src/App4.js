import React, { Component } from 'react';
import BoardForm from './component/BoardForm';
import BoardItem from './component/BoardItem';
/*
    add a board (post)
*/
class App4 extends Component {
    
    state = {
        maxNo: 1,
        boards: [
           
        ]
    }
    
    handleSaveData = (data) => {
        this.setState({
            boards: this.state.boards.concat({ reportNo: this.state.maxNo++, brddate: new Date(), ...data })
        });
    }
  
    render() {
        const { boards } = this.state;
        console.log(JSON.stringify(boards));
        return (
            <div>
                <BoardForm onSaveData={this.handleSaveData}/>
                <table border="1">
                    <tbody>
                    <tr align="center">
                        <td width="30">번호</td>
                        <td width="100">업무종류</td>
                        <td width="100">보고서종류</td>
                        <td width="200">제목</td>
                        <td width="250">글 내용</td>
                        <td width="80">작성자</td>
                        <td width="80">파일</td>
                        <td width="60">결제지정자</td>
                        <td width="100">날짜</td>
                    </tr>
                    {
                        boards.map(function(row){ 
                            return (<BoardItem key={row.reportNo} row={row} />);
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}


export default App4;

