import React from "react";

import {Route, IndexRoute} from "react-router";

import App from "../components/index";
import PostsIndex from "../components/postsIndex";
import PostsNew from "../components/postsNew";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex} />
        <Route path="posts/new" component={PostsNew} />
    </Route>
);