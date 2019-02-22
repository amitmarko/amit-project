import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { withRouter } from "react-router-dom";

class View extends Component {
    state = {
        repoName: '',
        url: '',
        linkClicked: false,
    }

    componentDidMount = () => {
        const { data, match } = this.props;
        let index;
        if (match.params) {
            index = match.params.index
        }
        if (isNaN(index) || data.length <= index) {
            return this.props.history.push("/");

        }
        const item = data[index];
        this.setState({
            repoName: item.full_name,
            url: item.html_url
        });
    }

    render() {
        const { repoName, url, linkClicked } = this.state;
        const disabled = linkClicked ? 'view__btn-disabled' : '';
        return (
            <div className='view'>
                <div className='view__name'>
                    {repoName}
                </div>
                <div className='view__buttons'>
                    <a href={url} target="_blank" className={`view__btn view__btn-link ${disabled}`} onClick={() => this.setState({ linkClicked: true })}>Open on GitHub</a>
                    <Link to='/' className='view__btn view__btn-back'>Back</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ dashboardData }) => {
    return {
        data: dashboardData.data,
    }
}

export default withRouter(connect(mapStateToProps, null)(View));