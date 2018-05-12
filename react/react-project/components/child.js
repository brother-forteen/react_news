import React from "react";

export default class ComponentChild extends React.Component{
  render(){
    return(
      <div>
        <p>子页面输入： <input type="text" onChange={this.props.changeParentPhone} /></p>
      </div>
    )
  }
}
