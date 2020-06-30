
/* eslint-disable no-console */
/* eslint-disable no-undef */


function getUsers(success) {                                      // Getting JSON from the GitHub API
  return fetch('https://api.github.com/users', {
    headers: {
      Accept: 'application/json',

    },
  }).then(checkStatus)
    .then(parseJSON)
    .then(success);


}

function getRepos(login, success) {                                      // Can be used to get repository count of user 
  return fetch(`https://api.github.com/users/${login}/repos`, {
    headers: {
      Accept: 'application/json',
    },
  }).then(checkStatus)
    .then(parseJSON)
    .then(success);


}


function checkStatus(response) {                                              // Error handling
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error);
    throw error;
  }
}

function parseJSON(response) {                                                  // Parsing JSON
  return response.json();

}


export { getUsers }

