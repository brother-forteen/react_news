import React from "react";
import ReactDom from "react-dom"
import ReactMixin from "react-mixin";
import ComponentChild from "./child";
import Mixin from "./mixin";

let defaultName = {name:"ddafasaf",sex:"男"};

export default class ComponentBody extends React.Component{

  constructor(){
    super();           // 调用基类的所有的初始化方法
    this.state = {
      sex: '男',
      phone:110
    };
  }

  componentWillMount(){
    // 定义自己的逻辑
    console.log("组件将要挂载");
  }

  componentDidMount(){
      console.log("组件已经挂载");
      setTimeout(()=>{
        this.setState({sex:"女"})
      },3000)
  }

  changeUserInfo(){
    this.setState({phone:10086});
    // let myInput = document.getElementById("input");
    // ReactDom.findDOMNode(myInput).style.color = "red";

    // 用refs
    console.log(this.refs.submitButton);
    this.refs.submitButton.style.color = "red";
    Mixin.log();
  }

  changeParentPhone(e){
    this.setState({phone:e.target.value});
  }

  render(){
    let userName = 'party';
    let boolInput = false;
    var htmlStr = "react\u0020lesson";
    var htmlStr1 = "react&nbsp;lesson";
    return(
      <div>
        <h2> this is the body component</h2>
        <p>{userName == '' ? '用户还没有登陆' : '用户名：' + userName}</p>
        <input  type="button" value="确认" disabled={boolInput} />
        {/* this is a 注释 */}
        <p>{htmlStr}</p>
        <p dangerouslySetInnerHTML={{__html : htmlStr1}}></p>
        <p>{this.state.sex} {this.state.phone} {this.props.userInfo.name} {this.props.userInfo.sex}</p>

        <p>父页面接收到的参数：{this.state.phone}</p>
        <input ref="submitButton" id="input" type="button" value="提交" onClick={this.changeUserInfo.bind(this)} />

        <ComponentChild changeParentPhone={this.changeParentPhone.bind(this)}/>
      </div>
    )
  }
}

// ComponentBody.propTypes = {
//   phone:React.propTypes.number.isRequired,
//   name:React.propTypes.string
// };
ComponentBody.defaultProps = defaultName;

ReactMixin(ComponentBody.prototype,Mixin);
