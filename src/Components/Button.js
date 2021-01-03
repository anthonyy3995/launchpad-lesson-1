import React, {useState} from 'react'


function Button() {
   
    
    return (
      <div
      onClick={() => setDarkMode(!getDarkMode)}>
          
          Enable Dark Mode
          
          
      </div>
    );
  }
  
  export default Button;