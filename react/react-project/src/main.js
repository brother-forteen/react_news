import React from "react";
import ReactDom from "react-dom";
import ComponentHeader from "../components/header";
import ComponentBody from "../components/body";
import ComponentFooter from "../components/footer";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import 'antd/dist/antd.css';

class Index extends React.Component{
  componentWillMount(){
    console.log("main 组件将要挂载");
  }

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.headerClick = this.headerClick.bind(this);
  }

  handleClick(){
    this.props.history.push('/body');
  }

  headerClick(){
    this.props.history.push('/header');
  }

  render(){
    var header = <ComponentHeader />;
    return(
      <div>
        {header}
        <ComponentBody userInfo={{name:"陈天澈",sex:"男"}} />
        <ComponentFooter />

        <button onClick={this.handleClick}>点我跳到bodyComponent</button>
        <button onClick={this.headerClick}>点我跳到header</button>
        <Link to="/foot">跳转到foot</Link>
      </div>

    )
  }
}

ReactDom.render(
  <div>
    <BrowserRouter>
      <Switch>
          <Route path='/' component={Index} exact></Route>
          <Route path='/header' component={ComponentHeader}>ComponentHeader</Route>
          <Route path='/body' component={ComponentBody}>ComponentBody</Route>
          <Route path='/foot' component={ComponentFooter}>ComponentFooter</Route>
      </Switch>
    </BrowserRouter>
  </div>
  ,document.getElementById('react')
);
