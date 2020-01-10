import React from 'react';
import {Link} from 'react-router-dom';


class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
  return (
<div className="section">
    <div className="container-fluid">
        <div className="menubar" >
    <div className="logo">
    <img  src="FrontendAssets/logo.svg" alt="img" />
    <h3>Intugine</h3>
    </div>
    <div className="menu" >
    <ul>
        <li><Link to="#">Home</Link></li>
        <li><Link to="#">Brands</Link></li>
        <li><Link to="#">Transporters</Link></li>
        <li><Link to="#"><span className="flaticon-avatar"></span><span className="flaticon-download"></span> </Link></li>
    </ul>
    </div>
    </div>
    </div>
</div>
  );
  }
}

export default Header;
