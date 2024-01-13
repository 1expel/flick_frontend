export function clearNotification(notificationid, userID, token) {
  //POST
  const axios = require("axios");
  axios
    .delete(
      `https://flick-service.herokuapp.com/api/notification/${notificationid}`,
      {
        headers: { Authorization: `Bearer ${token}` },
        body: {
          userID: { userID },
        },
      }
    )
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function clearAllNotifications(userID, token) {
  //POST
  const axios = require("axios");
  
  await axios
    .delete(
      `https://flick-service.herokuapp.com/api/notification/user/${userID}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function displayNotification(userID, token) {
  const axios = require("axios");

  try {
    const response = await axios.get(
      `https://flick-service.herokuapp.com/api/notification/user/${userID}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    var len = response.data.length;
    var array = [];

    for (let i = 0; i < len; i++) {
      if (response.data[i].notificationtype == "0") {
        array.push("A FlickUser invited you to join a Theatre");
      } else {
        array.push("A FlickUser has joined your Theatre");
      }
    }
    return array;
  } catch (error) {
    console.log(error);
  }
}
export function countNotification(notificationid, userID) {
  //GET
  const axios = require("axios");
  axios
    .get("https://flick-service.herokuapp.com/api/notification/user/", {
      params: {
        notificationid: `${notificationid}`,
        userID: `${userID}`,
      },
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}
