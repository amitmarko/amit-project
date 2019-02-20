import React, { Component } from 'react';
import Header from '../../components/header/Header';
import SearchBar from '../searchBar/SearchBar';

class Dashboard extends Component {
    state = {}
    render() {
        return (
            <div className='dashboard'>
                <Header />
                <SearchBar />
            </div>
        );
    }
}

export default Dashboard;