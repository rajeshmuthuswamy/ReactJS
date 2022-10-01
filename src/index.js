import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './images/Rock.jpeg';
import SingleComment from './SingleComment';
import profile2 from './images/France.jpeg';
import profile3 from './images/James.jpeg';
import UserCard from './UserCard';


const App = function () { //const App = ()=>{} for future reference
  return (
    <div className='ui comments'>
      <UserCard>
        <div>Hi This is Rajesh and I'm working as Employee</div>
      </UserCard>
      <UserCard>
      <SingleComment name='Rock' date='Today 5.00PM' text='Wow !!!' picture={profile1}> </SingleComment></UserCard>
      <UserCard>
      <SingleComment name='France' date='Today 6.00PM' text='Impossible !!!' picture={profile2}></SingleComment></UserCard>
      <UserCard>
      <SingleComment name='James' date='Today 7.00PM' text='Amazing !!!' picture={profile3}></SingleComment></UserCard>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
