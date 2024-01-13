import React from 'react';
import TextField from "@material-ui/core/TextField";
import { useState } from 'react';
import RWatchers from "../assets/removeWatcher.svg";
import Navbar from '../components/Navbar';
import {removeMember} from '../controllers/TheatreController';
import { useHistory } from 'react-router-dom';

function RemoveWatcher(props) {
  const history = useHistory();
  const [removedWatcher, setRemoveWatcher]=useState('');

  if (typeof props.location.state != 'undefined'){
    var theatreID = props.location.state.id;
  }

  const handleSubmit =  (e) => {
    e.preventDefault();
    if (removedWatcher){
      console.log(removedWatcher);
      removeMember(removedWatcher, theatreID);
      history.push('/theatreList');
    }
  
  }
    return (
      <div className ="view">
      <Navbar />
      <div className='iw-card'>
        <h1> Remove Watcher</h1>
        <br></br>
        <div className='watcher-img'>
          <img src={RWatchers} alt="Watchers" />
          </div>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            label="Search username..."
            variant="outlined"
            value = {removedWatcher}
            onChange ={e=>setRemoveWatcher(e.target.value)}
          ></TextField>
          <br></br>

          <br></br>
          <button className='btn' type='submit'>
            Remove Watcher   
          </button>
          </form>
      </div>
      </div>
    );
  }

export default RemoveWatcher;

