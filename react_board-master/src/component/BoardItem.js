import React from 'react';

class BoardItem extends React.Component {
    render() {
        console.log(this.props.row.title,this.props.row.task,this.props.row.reportKinds,
            this.props.row.title,this.props.row.content,this.props.row.writer,this.props.row.file,
            this.props.row.payment,this.props.row.brddate.toLocaleDateString('ko-KR'));
        return(
            <tr>
                <td>{this.props.row.reportNo}</td>
                <td>{this.props.row.task}</td>
                <td>{this.props.row.reportKinds}</td>
                <td>{this.props.row.title}</td>
                <td>{this.props.row.content}</td>
                <td>{this.props.row.writer}</td>
                <td>{this.props.row.file}</td>
                <td>{this.props.row.payment}</td>
                <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
            </tr>
        );
    }
}

export default BoardItem;