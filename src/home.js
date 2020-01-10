import React from 'react';
import api from './api';


class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    data:[],
    scan: []
    }
  }
   
 async componentDidMount(){
   const response = await api.post('/rohit', { "email":"rohitkumarmeena1996.com" }
   );
   console.log(response.data.data[0].scan);
   this.setState({data:response.data.data, scan:response.data.data[0].scan })
  };

  handleScan=(id)=>{
  console.log(id);
  const thisid = id;
  const newdata = this.state.data;
  const res = newdata.filter(item => item._id === thisid);
  this.setState({scan:res[0].scan})
  console.log(this.state.scan);
}

  render(){
  return (
    <div>
    <div className="container-fluid info" style={{marginBottom:'40px'}}>
        <div className="row">
        <div className="col-md-12">
            <div className="wrap del">
                <h3>DEL</h3>
                <h2 style={{color:'#fff'}}>916</h2>
            </div>
            <div className="wrap">
                <h3>INT</h3>
                <h2>232</h2>
            </div>
            <div className="wrap">
                <h3>OOD</h3>
                <h2>342</h2>
            </div>
            <div className="wrap">
                <h3>DEX</h3>
                <h2>916</h2>
            </div>
            <div className="wrap">
                <h3>NFI</h3>
                <h2>916</h2>
            </div>
        </div>
        <div className="col-md-4 track">
         <div className="wrap">
         <div className="img">
             <img src="FrontendAssets/destination.svg" alt="" />
             </div>
          <div className="subwrap">
            <ul>
              {this.state.scan.length === 0 ? null:
               this.state.scan.map((data, index)=>(
             <li key={index} className="green">
             <div className="bar "></div>
             <div className="content">
              <span className="f1">{data.location}</span>
             <span className="f2">{data.time}</span>
             <span className="f3"> </span> </div>
            </li>
              ))}
               
              
                </ul>  
          </div>
          <div className=" img2">
          <img src="FrontendAssets/warehouse.svg" alt="" />
          </div>
         </div>
        </div>
        <div className="col-md-8 dbtable">
        <div className="wrap">
        <table className="table table-hover">
    <thead>
      <tr>
        <th>AWB NUMBER</th>
        <th>TRANSPORTER</th>
        <th>SOURCE</th>
        <th>DESTINATION</th>
        <th>BRAND</th>
        <th>START DATE</th>
        <th>ETD</th>
        <th>STATUS</th>
      </tr>
    </thead>
    <tbody>
    <tr className="saperator"></tr>
      {this.state.data.map((data, index)=>(
        <tr key={index} onClick={()=>this.handleScan(data._id)} style={{cursor:'pointer'}}>
        <td >{data.awbno}</td>
        <td>{data.carrier}</td>
        <td>{data.from}</td>
        <td>{data.to}</td>
        <td>USPA</td>
       <td>{data.createdAt}</td>
        <td>{data.to}</td>
        <td>{data.current_status}</td>
      </tr>
      
      ))}
      <tr className="saperator"></tr>
      
    </tbody>
  </table>   
        
         </div>
        </div>
        </div>
    </div>
    </div>
  );
  }
}

export default Dashboard;
