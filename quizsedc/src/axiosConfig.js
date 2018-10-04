import axios from 'axios';

var apigetUrl = 'http://localhost:49639/api/quiz';
export const axiosQuiz = new axios.create({
    baseURL : apigetUrl
})