import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class ShowPosts extends Component {

    handleClick = (event) => {
        // console.log("click", event.target.id);
        // this.props.callGetOnePost(event.target.id)
        console.log("handle click", `/post/${event.target.id}`);
        


        let newpath = <Redirect to={{
            pathname: `/post/${event.target.id}`,
         
          }} />
    }

    render(){
console.log("props", this.props );
        return(
                <React.Fragment>
                    {this.props.myPosts.map(item=> 
                        <button type="button" key={item.id} id={item.id} className="btn btn-link"
                        onClick={(event)=>this.handleClick(event)}>
                        {item.title}
                     </button>
                    )}
                </React.Fragment>
             );
    }
}

export default ShowPosts;