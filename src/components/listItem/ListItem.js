import React from 'react';
import { Link } from 'react-router-dom'

const ListItem = ({ data, index }) => {
    const { full_name, description, stargazers_count } = data;
    return (
        <div className='list__item'>
            <Link to={`/${index}`}>
                <div className='list__item__row'>
                    <span className='list__item__row-label'>repo:</span>
                    <span className='list__item__row-details'>{full_name}</span>
                </div>
                <div className='list__item__row'>
                    <span className='list__item__row-label'>description:</span>
                    <span className='list__item__row-details'>{description}</span>
                </div>
                <div className='list__item__row'>
                    <span className='list__item__row-label'>stars:</span>
                    <span className='list__item__row-details'>{stargazers_count}</span>
                </div>
            </Link>
        </div>
    );
}

export default ListItem;