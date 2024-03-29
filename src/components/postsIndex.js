import React, {Component} from "react";

import {connect} from "react-redux";

import {fetchPosts} from "../actions/index";

import {Link} from "react-router";

class PostsIndex extends Component {
    constructor(props) {
        super(props);
    };

    componentWillMount() {
        this.props.fetchPosts();
    };

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add Post
                    </Link>
                </div>
                List of blog posts!...</div>
        );
    };
};

// function mapStateToProps(state) {
//     return {
//         posts: state.posts
//     };
// };

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({fetchPosts}, dispatch);
// }

export default connect(null, { fetchPosts })(PostsIndex);