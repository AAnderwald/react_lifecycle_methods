import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {                               //part 1
      text: "Hello, I'm an input element ",      //part 1 text: "Hello", 
      hasLoaded: false,                          /*part 4 */
    }
    this.handleInput = this.handleInput.bind (this); 
    this.handleClick = this.handleClick.bind (this); 
  }
                      
  componentDidMount ()  {                       /*Part 9 ComponentDidMount*/
    this.setState({ hasloaded: true});
  }  

  handleInput (event){                           /*part 3 change event that cause this method to be called*/
    this.setState({                              /*part 3 passes in an object in the correct stage with will be merged*/
        text: event.target.value                 /*part 3 change the text to event.targe.value where the target of this change event is the input value and want to change this value*/
      });
  }
  
  handleClick(){                                 /*Part 5 this.handleClick will toggle to value of hasLoading*/
    this.setState ({hasLoaded: !this.state.hasLoaded  /*Part 7 want to change hasLoaded this is false to begin with to make it true but since its true it will be false etx*/
    }); 
  }

  render() {
    if (this.state.hasLoaded) {     
      return (
        <div>
          <h1>Welcome to React!</h1> 
          <button /*part 6*/ onClick= {this.handleClick}>Toggle Button</button> 
          <hr />
          <input                                   /*part 2 excepct onChange*/ 
            type="text"
            placeholder={this.state.text}
            onChange={this.handleInput}            /*part 3*/
            />
        </div>
     );

    } else {
      return (
        <div>
          <h1>loading . . . </h1>
          <button /*part 8*/  onClick={this.handleClick}>load</button>
        </div>
      )
    }
  }
}


export default App;
