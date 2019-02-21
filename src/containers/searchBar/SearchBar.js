import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { setSearch, setSort, getRepositories } from '../../redux/actions/dashboardActions';

const options = [
    { value: 'stars', label: 'stars' },
    { value: 'forks', label: 'forks' },
    { value: 'update', label: 'update' }
];

class SearchBar extends Component {

    searchChange = (event) => {
        this.props.setSearch({ search: event.target.value })
    }

    sortChange = (selectedOption) => {
        this.props.setSort({ sort: selectedOption });
    }

    clickSearch = () => {
        const { dashboardData: { search } } = this.props;
        this.props.getRepositories({ search });
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
                            onChange={this.sortChange}
                            options={options}
                            className='search-bar__select'
                            id='sort'
                        />
                    </div>
                    <div className='search-bar__item search-bar__item-btn'>
                        <button className='btn btn-primary' onClick={this.clickSearch}>Submit</button>
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

export default connect(mapStateToProps, { setSearch, setSort, getRepositories })(SearchBar);