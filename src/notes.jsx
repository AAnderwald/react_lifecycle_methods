import React, { Component } from "react";

//somewhere I don't work does not define target? no clue will retry  all good now. will keep because of notes.

class App extends Component {
  constructor(props) {
    super(props);

//part 1  line 7-9 Initialize state in the App class component, and define a new property called "text" with some string as the value.
//hasLoaded for part 5
    this.state = { 
      text: "Change This Title", 
      hasLoaded: false,
    }
    
//part 5 create method handelClick, hasLoaded in the app state bind method
    this.handleInput = this.handleInput.bind(this);             //method for 4 change
    this.handleClick = this.handleClick.bind(this);             //method for 5 toggle
}

//part 9
componentDidMount(){
  this.setState({
    hasLoaded:true
  });
}


//part 3 handling the input does directly replace the state it mergess with inital state from line 9; the two are compared and see there is a new property for the title
//title and whatever is the value of input merge old to new state but keeps incoming state
handleInput(event) { 
  this.setState ({ 
      text: event.target.value
    });
}

//part 5 to toggle need to be the opposite of what it is so that it will toggle

handleClick() { 
  this.setState ({
    hasLoaded: !this.state.hasLoaded
  }); 
}

//part 2 line 36 input  Add an input element to your App. place hold is a gray color text in the box before you put anything in it.
//part 4 line 38 add an `onChange` event to the input that calls `this.handleInput`.
//part 6 line 39 the handelToggle button

  render() {
    if(this.state.hasLoaded) {
    return (
      <div>
        <h1>Welcome to React!</h1> 
        <button onClick={this.handleClick}>Toggle</button> 
        <hr />
        <input 
          type="text"  
          placeholder={this.state.text} 
          onChange={this.handleInput}
        />  
      </div>
    );
    } else {
      return (
        <div>
          <h1>loading. . .</h1>
          <button onClick ={this.handleClick}>Load</button>
        </div>
      );
    }
  }
}
//part 8 is lind 57

/*export default App;*/
