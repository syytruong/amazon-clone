import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-a2517/us-central1/api',
});

export default instance;