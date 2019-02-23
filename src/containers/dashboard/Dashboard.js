import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/Header';
import SearchBar from '../searchBar/SearchBar';
import List from '../list/List';
import Error from '../../components/error/Error';

const Dashboard = ({ searchEmpty }) => {
    return (
        <div className='dashboard'>
            <div>
                <Header />
                <SearchBar />
            </div>
            {!searchEmpty ?
                <List /> :
                <Error />
            }
        </div>
    );
}

const mapStateToProps = ({ dashboardData }) => {
    return {
        searchEmpty: dashboardData.searchEmpty,
    }
}

export default connect(mapStateToProps, null)(Dashboard);