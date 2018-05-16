import React from "react";
import ReactDom from "react-dom";
import ComponentHeader from "../components/header";
import ComponentBody from "../components/body";
import ComponentFooter from "../components/footer";

import 'antd/dist/antd.css';

class Index extends React.Component{
  componentWillMount(){
    console.log("main 组件将要挂载");
  }
  render(){
    var header = <ComponentHeader />;
    return(
      <div>
        {header}
        <ComponentBody userInfo={{name:"陈天澈",sex:"男"}} />
        <ComponentFooter />
      </div>

    )
  }
}

ReactDom.render(
    <Index />,
    document.getElementById('react')
);
