import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4545',
});

export default instance;