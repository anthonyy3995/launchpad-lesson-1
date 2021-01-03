import React from 'react';
import './style2.css';
//import {Link} from 'react-router-dom';

function DescriptionBox(props){
    const title = props.title
    const descript = props.description
    
    return(
        <div className = "description">
            
            {/* <Link to = '/'> how to add title to the url?? */}
            <h1>{title}</h1>
            {/* </Link> */}
            
            <p>{descript}</p>
        </div>
    )
}

export default DescriptionBox