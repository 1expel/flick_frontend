export function getToken() {
  return JSON.parse(sessionStorage.getItem('TOKEN_AUTH'));
};
  
export function setToken(userToken) {
  if (userToken) {
    sessionStorage.setItem('TOKEN_AUTH',JSON.stringify(userToken));
  } else {
    sessionStorage.removeItem('TOKEN_AUTH');
  }
};
  
export function isLoggedIn() {
  const token = getToken();
  if (!!token) {
      return true;
  } else {
      return false;
  }
};

export function getUserID() {
  return JSON.parse(sessionStorage.getItem('USER_ID'));
};

export function setUserID(userID) {
  if (userID) {
    sessionStorage.setItem('USER_ID',JSON.stringify(userID));
  } else {
    sessionStorage.removeItem('USER_ID');
  }
};

export function logOut() {
  if (isLoggedIn()) {
    console.log("Logging out");
    setToken();
    setUserID();
  }
};
