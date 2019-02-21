import axios from 'axios';
import { Github } from '../../shared/consts';

export const getRepositories = (search) => {
    search = search.replace(/ /g, '+');
    const url = `${Github.url}?per_page=${Github.limit}&q=${search}`
    return axios.get(url);
};
