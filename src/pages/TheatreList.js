import React from 'react';
import { Link } from 'react-router-dom';
import { accessTheatres } from '../controllers/TheatreController';
import { viewTheatre } from '../controllers/TheatreController';
import { getUsername} from '../controllers/TheatreController';
import { getUserID } from '../controllers/UserAuthentication';
import {retrieveMovieTitle} from '../controllers/MovieDisplayController';
import {useState} from 'react';
import Navbar from '../components/Navbar';


function TheatreList(){
    
    const [isLoading, setLoading] = useState(true);
    const [theatreName,setTheatreName]=useState();
    const [members,setTheatreMembers]=useState();
    const [matches,setTheatreMatches]=useState();
    const [theatreID,setTheatreID]=useState();
    let userId = getUserID();
    const [listofTheatres,setListofTheatres]=useState();
    
    const retrieveList = async data => {
        var theatresText="";
        let theatres =await accessTheatres(userId);

        console.log("Getting list of theatres...");
    
        if (theatres!==[]){
            try {
                for (const theatre of theatres) {
                    const theatreInfo = await viewTheatre(theatre);
                    var nameofTheatre=theatreInfo[0];
                    
                    theatresText = theatresText + `<input class="theatreButton" type="button" id ="${theatre}" value="${nameofTheatre}"/> <br></br>`;
                    if (document.getElementById (theatre) != null) {
                        document.getElementById (theatre).addEventListener ("click", function () {retrieveTheatreInfo(theatre)}, false);
                    }
                }
            }
            catch {
                window.location.reload();
            }
        }
        else {
            theatresText="";
        }
        setListofTheatres(theatresText);
        setLoading(false);
    }

    retrieveList();
    
    async function retrieveTheatreInfo(theatreID){
        document.getElementById("theatreInfo").style.visibility = "visible";
            
        const info = await viewTheatre(theatreID);
        const currentTheatreName = info[0];
        var theatreMembers = info[1];
        if (theatreMembers!==null){
            for (let i=0; i<theatreMembers.length; i++) {
                theatreMembers[i] = await getUsername(theatreMembers[i])+" ";
            }
        }
        var theatreMatches=info[2];
        
        if (theatreMatches !==null){
        for (let i=0; i<theatreMatches.length; i++) {
            theatreMatches[i] = await retrieveMovieTitle (theatreMatches[i]) + "\n";
        }
        console.log("Getting matches...");
    }
        setTheatreID(theatreID);
        setTheatreName(currentTheatreName);
        setTheatreMembers(theatreMembers);
        setTheatreMatches(theatreMatches);
    }
    
    if (isLoading) {
        return <div className="LoadingView">Loading...</div>;
      }

    return (
        <body>            
            <Navbar />
            <div class="theatreView">
            <div class='TheatreList'>
                
                <h2 class="theatreTitle">Your Theatres</h2>
                <div class="scrollTextTheatres" id="theatreText" dangerouslySetInnerHTML={{__html:listofTheatres}}></div>
                    <a href="./addTheatre" class="add-theatre-btn">Create Theatre</a>
                </div> 

                <div class="TheatreInfo" id="theatreInfo">
                    <div class="WatcherInfo">
                        <h2 class="theatreName" id="theatreName">{theatreName} Watchers</h2>
                        <br></br>
                        <div class="scrollTextUsers" id="userList">{members}</div>
                        <Link className='add-watcher-btn' to={{
                            pathname: "/inviteWatchers",
                            state: { id: theatreID }
                        }}>Invite Watcher</Link>

                        <br></br>
                        <Link className='add-watcher-btn' to={{
                            pathname: "/removeWatcher",
                            state: { id: theatreID }
                        }}>Remove Watcher</Link>                    
                    </div>
                    <div class="TheatreMatches">
                        <h2 class="matchesTitle">Matches</h2>
                        <div class="scrollTextMatches" id="matchesList">{matches}</div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default TheatreList;