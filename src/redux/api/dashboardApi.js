import axios from 'axios';

export const getRepositories = (text) => {
    const url = 'check'
    return axios.get(url);
};
