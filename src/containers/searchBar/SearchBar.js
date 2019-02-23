import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { setSearch, setSort, getRepositories, initRepositories } from '../../redux/actions/dashboardActions';

class SearchBar extends Component {


    state = {
        selectOptions: [
            { value: 'stars', label: 'stars' },
            { value: 'forks', label: 'forks' },
            { value: 'update', label: 'update' }
        ]
    }

    searchChange = (event) => {
        this.props.setSearch({ search: event.target.value })
    }

    sortChange = (selectedOption) => {
        this.props.setSort({ sort: selectedOption });
    }

    clickSearch = (event) => {
        event.preventDefault();
        const { search, sort } = this.props;
        if (search !== '') {
            this.props.getRepositories({ search, sort: sort.value });
        } else {
            this.props.initRepositories();
        }
    }

    render() {
        const { search, sort, isLoad } = this.props;
        const { selectOptions } = this.state;
        const buttonText = !isLoad ? 'Search' : <span className='btn-loading' />
        return (
            <div className='search-bar'>
                <form className='search-bar__content' onSubmit={this.clickSearch}>
                    <div className='search-bar__item'>
                        <label
                            htmlFor="text"
                            className='search-bar__label' >Search:</label>
                        <input
                            type="text"
                            className='search-bar__input'
                            id='text'
                            onChange={this.searchChange}
                            autoFocus
                            value={search} />
                    </div>
                    <div className='search-bar__item'>
                        <label htmlFor="sort" className='search-bar__label'>Sort By:</label>
                        <Select
                            value={sort}
                            onChange={this.sortChange}
                            options={selectOptions}
                            className='search-bar__select'
                            id='sort'
                        />
                    </div>
                    <div className='search-bar__item search-bar__item-btn'>
                        <button className='btn btn-primary' disabled={isLoad}>{buttonText}</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ dashboardData }) => {
    return {
        ...dashboardData,
    }
}

const mapDispatchToProps = (dispatch) => ({
    setSearch: (search) => dispatch(setSearch(search)),
    setSort: (sort) => dispatch(setSort(sort)),
    getRepositories: ({ search, sort }) => dispatch(getRepositories({ search, sort })),
    initRepositories: () => dispatch(initRepositories()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);