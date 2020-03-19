import axios from 'axios';

export default axios.create({
    baseURL: 'http://13.54.200.18:3002',
    headers: {'Access-Control-Allow-Origin': '*'}
});