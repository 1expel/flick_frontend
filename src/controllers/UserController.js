export async function LoginUser(username,password) {
    const axios = require ('axios');

    try {
        const response = await axios.post('https://flick-service.herokuapp.com/api/user/login/', {
            username: `${username}`,
            password: `${password}`
        });
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export async function SignUpUser(username,password) {
    console.log("Signing up user...");
    const axios = require ('axios');
    
    try {
        const response = await axios.post('https://flick-service.herokuapp.com/api/user/new/', {
            username: `${username}`,
            password: `${password}`
        });
        return response.data
        
    } catch (error) {
        console.log(error);
    }
}

export async function AccessUserProfile(userID, token) {
    const axios = require ('axios');
    
    try {
        const response = await axios.get(`https://flick-service.herokuapp.com/api/user/${userID}`, { headers: {"authorization" : `Bearer ${token}`}});
        return response.data.username
    }catch (error) {
        console.log(error);
    }
}

export async function ChangeUsername(userID, username, token) {
    const axios = require ('axios');

    try {
        await axios.put(`https://flick-service.herokuapp.com/api/user/${userID}/username/`, 
            { newUsername: `${username}`},
            {headers: {"Authorization" : `Bearer ${token}`}
        })
        
        alert("Username has been changed.");
    } catch (error) {
        console.log(error);

        if (error.response.status == 400) {
            alert("Username taken. Please choose another username.")
        }

        return "error";
    }
}