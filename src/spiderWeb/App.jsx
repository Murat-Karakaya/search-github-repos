import React from "react";
import Searchbox from "../spiderKnot/Searchbox";
import Repolist from "../spiderWeb/Repolist.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
        users: [],
        inputValue: ""
    };
  }


  handleClick = () => {
    const inputValue = this.inputRef.current.value;
    this.setState({ inputValue });
  };

  render() {
    return (
      <>
        <h1>Git It A Try</h1>
        <Searchbox handleClick={this.handleClick} inputRef={this.inputRef} />
        <Repolist inputValue={this.state.inputValue}/>
      </>
    );
  }
}

export default App;