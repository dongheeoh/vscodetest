import React,{Component} from 'react';

class PhoneInfo extends Component{
    static defaultProps={
        info:{
            task:'업무부여',
            id:0
        },
    }

    handleChange=(e)=>{
        const{name,value}=e.target;
        this.setState({
            [name]:value
        });
    }




    render(){
        const style={
            border:'1px solid black',
            padding: '8px',
            margin:'8px'
        };

        const {
            task
        }=this.props.info;

        return(
            <div style={style}>
                <div><b>{task}</b></div>
            </div>
        );
    }
}

export default PhoneInfo;