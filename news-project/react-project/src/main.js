import React from "react";
import ReactDom from "react-dom";
import RouterPCConfig from './router-config/router-pc-config';
import RouterMobileConfig from './router-config/router-mobile-config';
import MediaQuery from 'react-responsive';
import 'antd/dist/antd.css';


ReactDom.render(
  <div>
    <MediaQuery query="(min-device-width: 1224px)">
      {RouterPCConfig}
    </MediaQuery>

    <MediaQuery query="(max-device-width: 1224px)">
      {RouterMobileConfig}
    </MediaQuery>
  </div>
  ,document.getElementById('react')
);
