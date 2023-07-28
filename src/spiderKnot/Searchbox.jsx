import React from "react";

const Searchbox = ({handleClick, inputRef}) => {
    return(
        <div id="input_container">
          <div className="col-3">
            <input className="effect-3" type="text" ref={inputRef} placeholder="Search Accounts" onKeyPress={(event)=> {event.key === "Enter" && handleClick()}}/>
            <span className="focus-border"></span>
          </div>
          <button className="enterButton" onClick={handleClick}>enter</button>
        </div>
    );
}

export default Searchbox;