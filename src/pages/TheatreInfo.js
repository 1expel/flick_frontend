import React from 'react';
import { Link } from 'react-router-dom';
import {viewTheatre} from '../controllers/TheatreController';
import {useState} from 'react';

function TheatreInfo (theatreID) {
    
    const [theatreName,setTheatreName]=useState();
    const [members,setTheatreMembers]=useState();
    const [matches,setTheatreMatches]=useState();

    const retrieveTheatreInfo = async data => {
        
        const info = await viewTheatre(theatreID);
        const currentTheatreName = info[0];
        const theatreMembers = info[1];
        const theatreMatches=info[2];
        
        //setTheatreInfo(info);
        setTheatreName(currentTheatreName);
        setTheatreMembers(theatreMembers);
        setTheatreMatches(theatreMatches);
    }
    retrieveTheatreInfo();

    return (    
        <header>
            <div class="TheatreInfo">
                <div class="WatcherInfo">
                    <h2 class="theatreName" id="theatreName">{theatreName}</h2>
                    <div class="scrollTextUsers" id="userList">{members}</div>
                    <Link className='add-watcher-btn' to={{
                        pathname: "/inviteWatchers",
                        state: { id: theatreID }
                    }}>Invite Watcher</Link>

                    <br></br>

                    <Link className='add-watcher-btn' to={{
                        pathname: "/removeWatchers",
                        state: { id: theatreID }
                    }}>Remove Watcher</Link>
                
                </div>
                <div class="TheatreMatches">
                    <h2 class="matchesTitle">Matches </h2>
                    <div class="scrollTextMatches" id="matchesList">{matches}</div>
                    <br></br>
                </div>
            </div> 
        </header>
    )
}
export default TheatreInfo;
