import { getToken } from '../controllers/UserAuthentication';
let token = getToken();

export async function accessTheatres(userID) {
    const axios = require('axios');

    try {
        const response = await axios.get(`https://flick-service.herokuapp.com/api/theatre/user/${userID}/`,{ headers: {"Authorization" : `Bearer ${token}`}});
        return response.data.theatres;
    }catch (error) {
        console.log(error);
    }
}

export async function getUsername(userID) {
    const axios = require('axios');

    try {
        const response = await axios.get(`https://flick-service.herokuapp.com/api/user/${userID}/`,{ headers: {"Authorization" : `Bearer ${token}`}});
        return response.data.username;
    }catch (error) {
        console.log(error);
    }
}

export async function viewTheatre(theatreID) {
    let theatreName = "";
    let members = "";
    let matches = "";
    const axios = require('axios');

    // get theatre name
    try {
        const response = await axios.get(`https://flick-service.herokuapp.com/api/theatre/${theatreID}/name/`,{ headers: {"Authorization" : `Bearer ${token}`}});
        theatreName = response.data;
    } catch (error) {
        console.log(error);
    }
    
    // get members
    try {
        const response = await axios.get(`https://flick-service.herokuapp.com/api/theatre/${theatreID}/members/`,{ headers: {"Authorization" : `Bearer ${token}`}});
        members = response.data.members;
    } catch (error) {
        console.log(error);
    }
   
    // get theatre matches
    try {
        const response = await axios.get(`https://flick-service.herokuapp.com/api/theatre/${theatreID}/matches/`,{ headers: {"Authorization" : `Bearer ${token}`}});
        matches = response.data;
    } catch (error) {
        console.log(error);
    }
    return [theatreName, members, matches];
}

export async function createTheatre (theatreName) {
    const axios = require ('axios');
    const headers = {"Authorization": `Bearer ${token}`};

    try{
        const response = await axios.post('https://flick-service.herokuapp.com/api/theatre/new/', {
            theatreName: `${theatreName}`
        }, {headers:headers});
        alert(`${theatreName} has been created.`);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export async function inviteWatchers (username, theatreID) {
    const axios = require ('axios');
    const headers = {"Authorization": `Bearer ${token}`};
    try {
        await axios.post(`https://flick-service.herokuapp.com/api/theatre/${theatreID}/add/`, {
            user: `${username}`
        }, {headers:headers});
        
        alert(`Watcher ${username} has been added.`);
    } catch (error) {
            console.log(error);
            console.log(error.response)
            alert(`Watcher ${username} has not been added`);
        }
}

export async function removeMember (username, theatreID) {
    const axios = require ('axios');
    
    try{ 
        await axios.delete(`https://flick-service.herokuapp.com/api/theatre/${theatreID}/remove/`,{
        headers: {"Authorization" : `Bearer ${token}`},
        data: {user:`${username}`}
        }) ;
        alert(`Watcher ${username} has been removed.`);
    
    } catch (error) {
        console.log(error);
        alert(`Watcher ${username} has not been removed`);
    }
}