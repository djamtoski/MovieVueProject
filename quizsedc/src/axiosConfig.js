import axios from 'axios';

var apigetUrl = 'http://localhost:49639/api/quiz';
export const axiosMovie = new axios.create({
    baseURL : apigetUrl
})