// alert Component
import React, {Component} from 'react';  
class Alert extends Component {  
  render(){  
    return (  
      <div className={"alert alert-" + this.props.type}>  
        <h4>{this.props.header}</h4>  
        {this.props.children}  
      </div>  
    );  
  }  
}  
export default Alert;  

compo/Media
import React, {Component} from 'react';  
  
class Media extends Component {  
  render(){  
    return (  
      <div className="media my-3">  
        <img src={process.env.PUBLIC_URL+"/image/"+this.props.image}  
          className="mr-3" alt="media" width="100" />  
        <div className="media-body text-left">  
          <h5 className="mt-0">{this.props.title}</h5>  
          {this.props.children}  
        </div>  
      </div>  
    );  
  }  
}  
export default Media;  
