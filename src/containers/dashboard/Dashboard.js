import React, { Component } from 'react';
import Header from '../../components/header/Header';
import SearchBar from '../searchBar/SearchBar';
import List from '../list/List';

class Dashboard extends Component {
    state = {}
    render() {
        return (
            <div className='dashboard'>
                <Header />
                <SearchBar />
                <List />
            </div>
        );
    }
}

export default Dashboard;