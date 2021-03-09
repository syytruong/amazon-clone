import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-clone-a2517.cloudfunctions.net/api',
});

export default instance;

//'http://localhost:5001/clone-a2517/us-central1/api'
