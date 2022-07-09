/* eslint-disable prettier/prettier */
import axios from 'axios';

const API_KEY = 'AIzaSyBhUZgDfYcBrlxgVRfl9MW3EH4t4XZDioQ';

export async function createUser(email, password) {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    },
  );
}
