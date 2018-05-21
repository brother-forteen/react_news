import React from "react";
import {Row, Col, Menu, Icon} from 'antd';
export default class PCFooter extends React.Component{

  render(){
    return (
      <footer>
        <Row  type="flex" justify="center" align="middle">
          <Col span={1}></Col>
          <Col span={22}><p class="pc_footer">&copy; CopyRight By 2018 React News.</p></Col>
          <Col span={1}></Col>
        </Row>
      </footer>
    )
  }
}
