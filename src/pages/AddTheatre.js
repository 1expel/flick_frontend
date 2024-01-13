import React from "react";
import {TextField} from "@material-ui/core";
import Vector from "../assets/Vector.svg";
import {Button} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core";
import Navbar from '../components/Navbar';
import {useState} from 'react';
import {createTheatre} from '../controllers/TheatreController'
import Popup from '../components/Popup';
import {useHistory} from 'react-router-dom';


const useStyles = makeStyles({
    btn:{
    color: 'white',
    background: '#E23A3A',
    borderRadius: 30,
    display: 'center',
    margin: 'auto',
    paddingRight: "15px",
    paddingLeft: "0px",
  }
});


function AddTheatre() {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles()
  const [theatreName, setTheatreName]=useState('');
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const handleSubmit =  async(e) => {
    e.preventDefault();
    console.log("Creating Theatre...");

    if (theatreName){
      const theatre_id = await createTheatre(theatreName);
      
      if ((theatre_id) === undefined){
        togglePopup();
        console.log("New Theatre creation was not a success");
      }
      else{
        console.log("New Theatre was a success");
        history.push('/theatreList');
        }
    }
  }

  return (
    <div className ="view">
      <Navbar />
      <div className="card">
        <h1>New Theatre</h1>
        <div className="theatre-img">
          <img src={Vector} alt="Theatre" />
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Theatre Name"
            variant="outlined"
            required
            value ={theatreName}
            onChange ={e=>setTheatreName(e.target.value)}
          ></TextField>
        <br></br>
        <br></br>
        <Button 
        className={classes.btn} 
        variant="contained" type="submit" >
          Add Theatre
        </Button>
        </form>
      </div>
      {isOpen && <Popup
        content={<>
          <h4>Theatre was not succesfully created. Please try again. </h4>
        </>}
        handleClose={togglePopup}
      />}
    </div>
    
  );
}

export default AddTheatre;
