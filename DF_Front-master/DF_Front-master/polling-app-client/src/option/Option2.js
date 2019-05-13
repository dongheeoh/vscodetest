import React, { Component } from 'react';
import TextEdit from './Editor';
import Option2Input from './Input';


class Option2 extends Component {
    render() {
        return (
            <div className="Option2">
                <h1>보고서등록</h1>
                <Option2Input/>
                <TextEdit/>
            </div>
        );
    }
}
 export default Option2;