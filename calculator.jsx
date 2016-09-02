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
    this._add = this._add.bind(this);
    this._subtract = this._subtract.bind(this);
    this._multiply = this._multiply.bind(this);
    this._divide = this._divide.bind(this);
    this._clear = this._clear.bind(this);
  };

  setNum1(e) {
    // render empty string if no input or if backspaced
    const userInputOne = e.target.value ? parseInt(e.target.value) : "";
    this.setState({userInputOne});
  }

  setNum2(e) {
    // render empty string if no input or if backspaced
    const userInputTwo = e.target.value ? parseInt(e.target.value) : "";
    this.setState({userInputTwo});
  }

  _add(e) {
    e.preventDefault();
    const result = this.state.userInputOne + this.state.userInputTwo;
    this.setState({result});
  }

  _subtract(e) {
    e.preventDefault();
    const result = this.state.userInputOne - this.state.userInputTwo;
    this.setState({result});
  }

  _multiply(e) {
    e.preventDefault();
    const result = this.state.userInputOne * this.state.userInputTwo;
    this.setState({result})
  }

  _divide(e) {
    e.preventDefault();
    const result = this.state.userInputOne / this.state.userInputTwo;
    this.setState({result})
  }

  _clear(e) {
    e.preventDefault();
    const result = 0;
    this.setState({result});
  }

  render(){
    // console.log(this.state);
    return (
      <div>
        <input type="text"
              value={this.state.userInputOne}
              onChange={this.setNum1}></input>
        <input value={this.state.userInputTwo}
              type="text"
              onChange={this.setNum2}></input>
            <button onClick={this._add}>+</button>
            <button onClick={this._subtract}>-</button>
            <button onClick={this._multiply}>*</button>
            <button onClick={this._divide}>/</button>
            <button onClick={this._clear}>Clear</button>
        <h1>{this.state.result}</h1>
      </div>
    );
  }
}

export default Calculator;
