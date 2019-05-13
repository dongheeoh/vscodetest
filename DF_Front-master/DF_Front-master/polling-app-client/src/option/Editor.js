import React, { Component } from 'react';
import {
    Button
} from 'antd';
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";
import {
    Input, Select
} from 'antd';
import Uploader from './Uploader';
import { html } from './html';
import { html1 } from './html1';
import { html2 } from './html2';
const Option = Select.Option;
const InputGroup = Input.Group;


class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            title: '',
            payment:'',

        };
    };
    updateContent = (value) => {
        this.setState({ content: value })
    }
    updatePayment=(value)=>{
        this.setState({
            payment:value
        })
    }

    handleChange=(e)=>{
        console.log(e.target.value);
        this.setState({
          [e.target.name]:e.target.value,
        });
      }
    jodit;
    setRef = jodit => this.jodit = jodit;
    config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }
    render() {
        console.log(this.state.payment);
        console.log(this.state.content);
        return (
            <div>
                <div className="information" >
                    <InputGroup compact>
                        <Select defaultValue="보고서 선택" style={{ width: '20%' }} onChange={this.updateContent}>
                            <Option value={html()}>일일 보고서</Option>
                            <Option value={html1()}>주간 보고서</Option>
                            <Option value={html2()}>월간 보고서</Option>
                        </Select>
                        <Input style={{ width: '65%' }} placeholder="제목" name="title" onChange={this.handleChange} />
                        <Select style={{ width: '15%' }} placeholder="결제선 지정" onChange={this.updatePayment}>
                            <Option value={"팀장"}>팀장</Option>
                        </Select>
                    </InputGroup>
                   
                </div>
                <JoditEditor
                    editorRef={this.setRef}
                    value={this.state.content}
                    config={this.config}
                    onChange={this.updateContent}
                />
                 <Uploader/>
                <div className='submit'>
                    <Button onClick={this.onClick}>등록하기</Button>
                </div>
            </div>
        );
    };

};



export default Editor;