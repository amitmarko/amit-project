import axios from 'axios';
import { Github } from '../../shared/consts';

export const getRepositories = ({ search, sort }) => {
    search = search.replace(/ /g, '+');
    const url = `${Github.url}?per_page=${Github.limit}&q=${search}&sort=${sort}`;
    return axios.get(url);
};
