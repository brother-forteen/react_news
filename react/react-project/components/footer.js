import React from "react";
// var footerCss = require("../src/css/footer.css");

// export default class ComponentFooter extends React.Component{
//   render(){
//     console.log(footerCss)
//     return(
//       <footer>
//         <p className={footerCss.mainFooter}>this is the footer</p>
//       </footer>
//     )
//   }
// }

export default class ComponentFooter extends React.Component{
  render(){
    var footerConvertStyle = {
      "mainFooter":{
        "backgroundColor":"#3e8449",
        "clolr":"#fff",
        "padding":"20px",
        "letter-spacing":"2px",
      }
    }
    return(
      <footer>
        <p style={footerConvertStyle.mainFooter}>this is the footer</p>
      </footer>
    )
  }
}
