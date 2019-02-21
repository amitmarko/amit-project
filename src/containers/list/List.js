import React, { Component } from 'react';
import ListItem from '../../components/listItem/ListItem';
import Loader from '../../components/loader/Loader';
import { Github } from '../../shared/consts';
import { connect } from 'react-redux';

class List extends Component {

    renderLoader = () => {
        const loader = [];
        for (let i = 0; i < Github.limit; i++)
            loader.push(<Loader />);
        return loader;
    }

    renderList = () => {
        const { list } = this.props;
        return list.map((data, index) => <ListItem data={data} key={index} />)
    }

    render() {
        const { isLoad } = this.props;
        return (
            <div className='list'>
                {isLoad ?
                    this.renderLoader() :
                    this.renderList()
                }
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