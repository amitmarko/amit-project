import React, { Component } from 'react';
import ListItem from '../../components/listItem/ListItem';
import Loader from '../../components/loader/Loader';
import { Github } from '../../shared/consts';
import { connect } from 'react-redux';

class List extends Component {

    state = {
        loader: [],
    }

    componentDidMount = () => {
        const loader = [];
        for (let i = 0; i < Github.limit; i++)
            loader.push(<Loader key={i} />);
        this.setState({ loader });
    }

    renderList = () => {
        const { list } = this.props;
        return list.map((data, index) => <ListItem data={data} key={index} index={index} />)
    }

    render() {
        const { isLoad } = this.props;
        const { loader } = this.state;
        return (
            <div className='list'>
                {isLoad ?
                    loader :
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