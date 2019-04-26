import React, { Component } from 'react';
import './App.css';

class APP2 extends Component {
    render() {
      return (
      <div className='App2'>
        <dl>
            {
                [1,2,3,4].map((e,i)=>
                 <React.Fragment>
                 <dt>index:{i}</dt>
                  <dd>count:{e}</dd>   
                  </React.Fragment>
                )
            }
        </dl>
        <h2>hello World </h2>
      </div>
      );
    }
  }
  
  export default APP2;