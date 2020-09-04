import React from "react";

class Header extends React.Component {
    render(){
        const {header}= this.props
        return (
            <div>
            <div className="row ">
            <p className ="pt-3 pr-3 ">Header 1</p>
            <h1>{header.text}</h1>
            </div>
           
            <div className="row ">
            <p className ="pt-2 pr-3">Header 2</p>
            <h3>{header.text}</h3>
            </div>
            <div className="row ">
            <p className ="pt-2 pr-3">Header 3</p>
            <h3>{header.text}</h3>
            </div>
            <div className="row ">
            <p className =" pr-3">Header 4</p>
            <h4>{header.text}</h4>
            </div>
            <div className="row ">
            <p className =" pr-3">Header 5</p>
            <h5>{header.text}</h5>
            </div>
            <div className="row ">
            <p className =" pr-3">Header 6</p>
            <h6>{header.text}</h6>
            </div>
            </div>
          );
    }
}

export default Header;
