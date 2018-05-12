import React from "react";

export default class ComponentHeader extends React.Component{

  constructor(){
    super();
    this.state = {
      miniHeader: false
    }
  };

  switchHeader(){
    this.setState({
      miniHeader:!this.state.miniHeader
    })
  }

  render(){

    const styleComponentHeader = {
      header:{
        "background":this.state.miniHeader ? "#333" : "#e52936",
        color:"#fff",
        padding:"20px"
      }
    }

    return (
      <header style={styleComponentHeader.header} className="header_css" onClick={this.switchHeader.bind(this)}>
        <h1> this is a header component</h1>
      </header>
    )
  }
}
