import axios from 'axios';

const API  = axios.create({ baseURL: 'http://localhost:8080/api/articles' });

export const getArticles = () => API.get('/get_articles');

