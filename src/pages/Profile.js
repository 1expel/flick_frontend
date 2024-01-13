import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { getToken, getUserID } from '../controllers/UserAuthentication';
import {AccessUserProfile, ChangeUsername} from '../controllers/UserController'
import {Container} from '../components/Container';
import {displayNotification,clearAllNotifications} from '../controllers/UserNotificationController'

function Profile() {
    // Render User Information
    const [isLoading, setLoading] = useState(true);
    const [username, setUsername] = useState();
    var [noti5, setNoti] = useState();

    const token = getToken();
    const userID = getUserID();
    console.log("user token:", token);
    console.log("user ID:", userID);

    async function display ()  {
        const noti = await displayNotification(userID,token);
        return noti
    }
    
    const onSubmit2 = async (event) => {
        const result = await clearAllNotifications(userID,token);

        // Refresh Profile and load new User Info
        if (!result) {
            window.location.reload();
        }
    };

    useEffect(() => {
        async function fetchData () {
            // Get user info
            const data = await AccessUserProfile(userID, token);
            setUsername(data);

            // Get notification info
            var noti = await display();
            setNoti(noti);
            setLoading(false);
        }
        fetchData();
      }, []);

    if (isLoading) {
        return <div className="LoadingView">Loading...</div>;
      }

     function PrintNoti(noti5) {
        return (
            <ul>
              {noti5.map(item => {
                return <div className="Notification" >{item}   </div>;
              })}
            </ul>
          );
    }

    // Popup Form
    const triggerText = 'Change Username';
    const onSubmit = async (event) => {
        console.log(`Changing Username to:' ${event.newUsername}...`);

        const error = await ChangeUsername(userID, event.newUsername,token);
        
        // Refresh Profile and load new User Info
        if (!error) {
            setUsername(username);
            window.location.reload();
        }
    };

    return (
        <div className="view">
            <Navbar />
            <div className="ProfileView">
                <h1>User Profile</h1>
                <div className="UserInfo">
                    <div className="UserText">
                        <br></br>
                        {username ? username : "User"}
                    </div>
                    <br></br>
                    <div className="UserTextID">
                        User ID: {userID}
                    </div>
                    <br></br>
                    <Container triggerText={triggerText} onSubmit={onSubmit} /> 
                </div>
                <button className = "ClearButton" onClick={onSubmit2} type="button">
                    Clear Notifications
                </button>
                <div className="NotiBlock">
                    <h3>Notifications</h3>
                    <div>   
                        {PrintNoti(noti5)}
                    </div>
                    <br></br>
                </div>
            </div>
        </div>
    )
}

export default Profile; 
