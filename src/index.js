import React from 'react';
import ReactDOM from 'react-dom';

const App = function() { //const App = ()=>{} for future reference
    const buttonText = 'Submit';
    // const buttonText = {text:'Submit'};
    
  return(
    // <div>Hi this is React!!!</div>
    <div>
        <label for="name" className='label'> Enter Department</label>
        <input id="name" type="text"></input>
        <button style={{backgroundColor:'red', color:'white'}}>
            {buttonText}
            {/* {buttonText.text} */}
        </button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)