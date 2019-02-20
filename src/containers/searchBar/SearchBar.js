import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { setSearch, setSort } from '../../redux/actions/dashboardActions';

const options = [
    { value: 'stars', label: 'stars' },
    { value: 'forks', label: 'forks' },
    { value: 'update', label: 'update' }
];

class SearchBar extends Component {

    searchChange = (event) => {
        this.props.setSearch({ search: event.target.value })
    }

    handleChange = (selectedOption) => {
        this.props.setSort({ sort: selectedOption });
    }

    render() {
        const { dashboardData: { search, sort } } = this.props;
        return (
            <div className='search-bar'>
                <div className='search-bar__content'>
                    <div className='search-bar__item'>
                        <label
                            htmlFor="text"
                            className='search-bar__label' >Search:</label>
                        <input
                            type="text"
                            className='search-bar__input'
                            id='text'
                            onChange={this.searchChange}
                            value={search} />
                    </div>
                    <div className='search-bar__item'>
                        <label htmlFor="sort" className='search-bar__label'>Sort By:</label>
                        <Select
                            value={sort}
                            onChange={this.handleChange}
                            options={options}
                            className='search-bar__select'
                            id='sort'
                        />
                    </div>
                    <div className='search-bar__item search-bar__item-btn'>
                        <button className='btn btn-primary'>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ dashboardData }) => {
    return {
        dashboardData,
    }
}

export default connect(mapStateToProps, { setSearch, setSort })(SearchBar);