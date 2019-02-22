import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/Header';
import SearchBar from '../searchBar/SearchBar';
import List from '../list/List';
import Error from '../../components/error/Error';

class Dashboard extends Component {

    state = {}

    render() {
        const { searchEmpty } = this.props;
        return (
            <div className='dashboard'>
                <Header />
                <SearchBar />
                {!searchEmpty ?
                    <List /> :
                    <Error />
                }
            </div>
        );
    }
}

const mapStateToProps = ({ dashboardData }) => {
    return {
        searchEmpty: dashboardData.searchEmpty,
    }
}

export default connect(mapStateToProps, null)(Dashboard);