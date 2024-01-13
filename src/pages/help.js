import React from 'react';
import Navbar from '../components/Navbar';

function Help() {
  return (
    <div className='view'>
      <Navbar />
      <div className='help'>
        <h1> Frequently Asked Questions </h1>
        <div className='faq'>
        <h3> Question 1: How do you start swiping?</h3>
        <p> In order to start swiping, you must first be in a theatre. Once in a theatre, navigate to the "Flick" page by clicking the hamburger menu in the top left corner. </p>
        <h3> Question 2: Can I change my username?</h3>
        <p> To change your username, navigate to the "Profile" page and click on the "Change Username" button. </p>
        <h3> Question 3: How many members can I add to a theatre?</h3>
        <p> Up to 100 members can be added into a theatre. </p>
        <h3> Question 4: Will I receive notifications?</h3>
        <p> All notifications can be found on your "Profile" page. </p>
        <h3> Question 5: Can I add new members after my theatre is created?</h3>
        <p> Yes, once a new theatre is created you may invite new members by clicking the "Invite Watchers" button on the "Theatre" page. </p>      
      </div>
      </div>
      </div>

  );
}

export default Help;