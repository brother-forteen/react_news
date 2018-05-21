import React from "react";
import PcHeader from "./pc_header";
import PCFooter from "./pc_footer";

export default class PCHome extends React.Component{
  render(){
    return (
      <div>
        <PcHeader />
        <PCFooter />
      </div>
    )
  }
}
