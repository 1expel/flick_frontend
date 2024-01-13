import React from 'react';
import {TextField} from "@material-ui/core/";
import { useState } from 'react';
import Watchers from "../assets/watchers.svg";
import Navbar from '../components/Navbar';
import {inviteWatchers} from '../controllers/TheatreController';
import { useHistory } from 'react-router-dom';

function InviteWatcher(props) {
  const history = useHistory();
  const [newWatcher, setNewWatcher]=useState('');

  if (typeof props.location.state != 'undefined'){
    var theatreID = props.location.state.id;
  }

  const handleSubmit =  (e) => {
    e.preventDefault();
    if (newWatcher){
      console.log("Adding watcher...");
      inviteWatchers(newWatcher, theatreID);
      history.push('/theatreList');
  }
}
  return (
    <div className ="view">
      <Navbar />
      <div className='iw-card'>
        <h1>Add Watcher</h1>
        <br></br>
        <div className='watcher-img'>
          <img src={Watchers} alt="Watchers" />
        </div>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            label="Search username..."
            variant="outlined"
            value = {newWatcher}
            onChange ={e=>setNewWatcher(e.target.value)}
          />
          <br></br>
          <br></br>
          <button className='btn' type='submit'>
            Invite Watcher   
          </button>
        </form>
      </div>
    </div>
    );
  }

export default InviteWatcher;
