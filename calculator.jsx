import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      result: 0,
      userInputOne: "",
      userInputTwo: ""
    }

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
  };

  setNum1(e) {
    // render empty string if no input or if backspaced
    const userInputOne = e.target.value ? parseInt(e.target.value) : ""
    this.setState({userInputOne})
  }

  setNum2(e) {
    // render empty string if no input or if backspaced
    const userInputTwo = e.target.value ? parseInt(e.target.value) : ""
    this.setState({userInputTwo})
  }

  render(){
    console.log(this.state);
    return (
      <div>
        <input type="text"
              value={this.state.userInputOne}
              onChange={this.setNum1}></input>
        <input value={this.state.userInputTwo}
              type="text"
              onChange={this.setNum2}></input>
        <h1>{this.state.result}</h1>
      </div>
    );
  }
}

export default Calculator;
