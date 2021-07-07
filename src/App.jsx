import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

//part 1  line 7-9 Initialize state in the App class component, and define a new property called "text" with some string as the value.
//hadLoaded for part 5    
     this.state = { text: "Change This Title", hasLoaded: false,};
    
//part 5 create method handelClick, hasLoaded in the app state bind method
    this.handleInput = this.handleInput.bind(this);             //method for 4 change
    this.handleClick = this.handleClick.bind(this);             //method for 5 toggle
}

//part 3 handling the input does directly replace the state it mergess with inital state from line 9; the two are compared and see there is a new property for the title
//title and whatever is the value of input merge old to new state but keeps incoming state
handleInput() { this.setState ({ text: document.getElementById("text").value});
}

//part 7 to toggle need to be the opposite of what it is so that it will toggle

handleClick() { this.setState ({hasLoaded: !this.state.hasLoaded}); 
}

//part 2 line 38 input  Add an input element to your App. place hold is a gray color text in the box before you put anything in it.
//part 4 line 40 add an `onChange` event to the input that calls `this.handleInput`.
//part 6 line 41 the handelToggle button

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1> 
        <hr />
        
        <input type="text" name="text" id="text" placeholder="New Title Here"/>  

        <button onClick={this.handleInput}>Click here</button>   
        <button onClick={this.handleClick}>Toggle</button> 

      </div>
    );
  }
}

export default App;
