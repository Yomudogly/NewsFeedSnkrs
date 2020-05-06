import React, { useContext } from "react";
import { Context } from "./store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import LazyLoad from "react-lazyload";
import logo from "../static/logo.png";

export const Posts = props => {
	const { store, actions } = useContext(Context);

	return (
		<LazyLoad>
			<div className="container mt-2">
				<div className="row">
					<div className="col-4">
						<img src={logo} height="60" />
					</div>
					<div className="col-8">
						<p className="font-weight-lighter textNav ml-3">
							▽ Click on the photos below to explore, discover,
							and share with friends the latest sneakers featured
							on our daily feed ▽
						</p>
					</div>
				</div>
				<hr className="mb-3 mt-0" />

				<div className="card-columns">
					{store.posts.map((post, index) => (
						<div
							key={index}
							style={{ display: "inline-block" }}
							className="card">
							<Link to={`/${index}`}>
								<img
									src={post.media.medium}
									className="card-img-top"
									alt="..."
									// height="300"
								/>
							</Link>
						</div>
					))}
				</div>

				<hr className="mb-1 mt-2" />
				<nav className="navbar navbar-light">
					<span className="navbar-text">
						<a href="https://snkrsden.com/">
							© All rights reserved || SnkrsDen
						</a>
					</span>
				</nav>
			</div>
		</LazyLoad>
	);
};

Posts.propTypes = {
	match: PropTypes.object
};
