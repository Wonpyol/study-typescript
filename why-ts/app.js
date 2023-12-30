// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {Object} Address
 * @property {string} street
 */

/**
 * @typedef {Object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */
/**
 * @returns {Promise<User>}}
 */
function fetchUser() {
  // @ts-ignore
  return axios.get(url);
}

fetchUser().then((response) =>  {
  // @ts-ignore
  user = response.data
  // @ts-ignore
  username.innerText = user.name;
  // @ts-ignore
  email.innerText = user.email;
  // @ts-ignore
  address.innerText = user.address.street;
})
