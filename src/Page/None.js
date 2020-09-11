// // src/app.js

// import React, { Component } from 'react';
// import Card from "./Components/Card"
// import Konversi from "./Page/Konversi"
// class App extends React.Component{
//   render(){
//     return(
//       <Konversi />
//     )
//   }
// }
// export default App;

// // src/page/Konversi.js
// import React from 'react';
// import Card from "../Components/Card"
// class Konversi extends React.Component{
//     constructor(){
//         super() // memanggil constructor milik superclass
//         this.state = {
//             biner: 0,
//             option: 10,
//             result: 0
//         }
//     }
//     bind = (event) => {
//         this.setState({[event.target.name] : event.target.value})
//     }
//     convertBiner = () => {
//         let biner = this.state.biner
//         let option = this.state.option

//         let hasil = parseInt(biner,2).toString(option)
//         this.setState({ result: hasil})
//     }
//     render(){
//         return (
//             <div className="container">
//                 <Card title="Konversi Biner" tipe="info">
//                     Biner
//                     <input type="number" value={this.state.biner} name="biner" onChange={this.bind} className="form-control" />
//                     <select value={this.state.option} name= "option"  onChange={this.bind} className="form-control">
//                         <option value="10">Desimal</option>
//                         <option value="8">Octal</option>
//                         <option value="16">Hexa</option>
//                     </select>
//                     <button className="btn btn-primary btn-block" onClick={this.convertBiner}>
//                         Convert</button>
//                     <input type="text" name="result" className="form-control" readOnly value={this.state.result} />
//                 </Card>
//             </div>
//         )
//     }
// }

// export default Konversi

// // index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


// // compo/Card
// import React from 'react';
// class Card extends React.Component{
//     render(){
//         return (
//             <div className='card '>
//                 <div className={"card-header bg-"+ this.props.tipe +" text-white"}>
//                     <h2>{ this.props.title }</h2>
//                 </div>
//                 <div className="card-body">
//                     { this.props.children }
//                 </div>
               
//             </div> 
//         )
//     }
// }
// export default Card;

// // alert Component
// import React, {Component} from 'react';  
// class Alert extends Component {  
//   render(){  
//     return (  
//       <div className={"alert alert-" + this.props.type}>  
//         <h4>{this.props.header}</h4>  
//         {this.props.children}  
//       </div>  
//     );  
//   }  
// }  
// export default Alert;  

// compo/Media
// import React, {Component} from 'react';  
  
// class Media extends Component {  
//   render(){  
//     return (  
//       <div className="media my-3">  
//         <img src={process.env.PUBLIC_URL+"/image/"+this.props.image}  
//           className="mr-3" alt="media" width="100" />  
//         <div className="media-body text-left">  
//           <h5 className="mt-0">{this.props.title}</h5>  
//           {this.props.children}  
//         </div>  
//       </div>  
//     );  
//   }  
// }  
// export default Media;  

// // package.json