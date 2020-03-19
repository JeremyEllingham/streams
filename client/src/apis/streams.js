import axios from 'axios';

export default axios.create({
    baseURL: 'http://server:3002',
    headers: {'Access-Control-Allow-Origin': '*'}
});