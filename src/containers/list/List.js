import React, { Component } from 'react';
import ListItem from '../../components/listItem/ListItem';
import { connect } from 'react-redux';

class List extends Component {

    state = {}

    render() {
        const { list, isLoad } = this.props;
        return (
            <div className='list'>
                {list.map((data, index) => <ListItem data={data} key={index} />)}
            </div>
        );
    }
}

const mapStateToProps = ({ dashboardData }) => {
    return {
        list: dashboardData.data,
        isLoad: dashboardData.isLoad,
    }
}

export default connect(mapStateToProps, null)(List);