// import Axios from 'axios';

const BASE_URL = 'http://localhost:5000/';

export const register = async (firstname, lastname, email, password) => {
  try {
    const url = BASE_URL + 'user/signup';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstname,
        familyName: lastname,
        email,
        password,
        twitterInfo: '',
      }),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const login = async (email, password) => {
  try {
    const url = BASE_URL + 'user/signin';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getUserById = async (id) => {
  try {
    const url = BASE_URL + 'user/' + id;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};
