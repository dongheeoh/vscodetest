import React,{Component} from 'react';

class BoardForm extends Component {
    state = {}
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSaveData(this.state);
        this.setState({});
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="업무종류" name="task" onChange={this.handleChange}/>
                <input placeholder="보고서종류" name="reportKinds" onChange={this.handleChange}/>
                <input placeholder="제목" name="title" onChange={this.handleChange}/>
                <input placeholder="글내용" name="content" onChange={this.handleChange}/>
                <input placeholder="작성자" name="writer" onChange={this.handleChange}/>
                <input placeholder="파일" name="file" onChange={this.handleChange}/>
                <input placeholder="결제지정자" name="payment" onChange={this.handleChange}/>
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default BoardForm;