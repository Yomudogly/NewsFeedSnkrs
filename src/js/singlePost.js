import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "./store/appContext";

import LazyLoad from "react-lazyload";
import logo from "../static/logo.png";

export const SinglePost = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-2 p-2">
			<div className="row">
				<div className="col-4">
					<Link to={`/`}>
						<img src={logo} height="60" />
					</Link>
				</div>
				<div className="col-8">
					<p className="font-weight-lighter textNav ml-3">
						▽ Click on the photos below to explore, discover, and
						share with friends the latest sneakers featured on our
						daily feed ▽
					</p>
				</div>
			</div>
			<hr className="mb-3 mt-0" />
			<h2
				dangerouslySetInnerHTML={{
					__html: store.posts[props.match.params.id].title
				}}></h2>
			<LazyLoad>
				<div
					className="container wp-post"
					dangerouslySetInnerHTML={{
						__html: store.posts[props.match.params.id].content
					}}></div>
			</LazyLoad>
			<hr className="mb-1 mt-2" />
			<nav className="navbar navbar-light">
				<span className="navbar-text">
					<a href="https://snkrsden.com/">
						© All rights reserved || SnkrsDen
					</a>
				</span>
			</nav>
		</div>
	);
};

SinglePost.propTypes = {
	match: PropTypes.object
};
