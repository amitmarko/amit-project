import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearch } from '../../redux/actions/dashboardActions';

class SearchBar extends Component {
    state = {}

    handleChange = (event) => {
        this.props.setSearch({ search: event.target.value })
    }

    render() {
        const { dashboardData: { search } } = this.props;
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
                            onChange={this.handleChange}
                            value={search} />
                    </div>
                    <div className='search-bar__item'>
                        <label htmlFor="sort" className='search-bar__label'>Sort By:</label>
                        <input type="text" className='search-bar__input' id='sort' />
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

export default connect(mapStateToProps, { setSearch })(SearchBar);