import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import React from "react";
import MobileHome from "../components/mobile/mobile_home";
import ComponentBody from "../components/body";
import ComponentFooter from "../components/footer";


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
    return(
      <div>
        <ComponentBody userInfo={{name:"陈天澈",sex:"男"}} />
        <ComponentFooter />

        <button onClick={this.handleClick}>点我跳到bodyComponent</button>
        <button onClick={this.headerClick}>点我跳到header</button>
        <Link to="/foot">跳转到foot</Link>
      </div>

    )
  }
}


const RouterMobileConfig =
<BrowserRouter>
    <Switch>
        <Route path='/' component={MobileHome} exact></Route>
        <Route path='/header' component={MobileHome}>PcHeader</Route>
        <Route path='/body' component={ComponentBody}>ComponentBody</Route>
        <Route path='/foot' component={ComponentFooter}>ComponentFooter</Route>
    </Switch>
  </BrowserRouter>

export default RouterMobileConfig;
