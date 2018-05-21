import React from "react";
import {Row, Col, Menu, Icon} from 'antd';
export default class PCHeadr extends React.Component{
  constructor(){
    super();
    this.state = {
      current:'home'
    };
  }

  handleClick(e){
      this.setState({
        current: e.key,
      });
  }

  render(){
    return (
      <header>
        <Row  type="flex" justify="start" align="middle">
          <Col span={1}></Col>
          <Col span={5}><a herf="/"><img class="news_logo" src={require("../../images/news_logo.png")} alt="logo" /><span class="title">React News</span></a></Col>
          <Col span={15}>
            <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick.bind(this)}>
              <Menu.Item key="home"><Icon type="home" />首页</Menu.Item>
              <Menu.Item key="headlines"><Icon type="laptop" />头条</Menu.Item>
              <Menu.Item key="society"><Icon type="team" />社会</Menu.Item>
              <Menu.Item key="domestic"><Icon type="book" />国内</Menu.Item>
              <Menu.Item key="international"><Icon type="global" />国际</Menu.Item>
              <Menu.Item key="entertainment"><Icon type="appstore" />娱乐</Menu.Item>
              <Menu.Item key="sports"><Icon type="dribbble" />体育</Menu.Item>
            </Menu>
          </Col>
          <Col span={2}>
            <a href="/">登陆</a>
            <a href="/">注册</a>
          </Col>
          <Col span={1}></Col>
        </Row>
      </header>
    )
  }
}
