import React from 'react';

const ListItem = ({ data }) => {
    const { full_name, description, forks } = data;
    return (
        <div className='list__item'>
            <div className='list__item__row'>
                <span className='list__item__row-label'>repo:</span>
                <span className='list__item__row-details'>{full_name}</span>
            </div>
            <div className='list__item__row'>
                <span className='list__item__row-label'>description:</span>
                <span className='list__item__row-details'>{description}</span>
            </div>
            <div className='list__item__row'>
                <span className='list__item__row-label'>forks:</span>
                <span className='list__item__row-details'>{forks}</span>
            </div>
        </div>
    );
}

export default ListItem;