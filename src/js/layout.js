import React, { useContext } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";

import ScrollToTop from "./component/scrollToTop";

import { Posts } from "./posts";
import { SinglePost } from "./singlePost";

export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	//const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter>
				<ScrollToTop />
				<Switch>
					<Route exact path="/" component={Posts} />

					<Route exact path="/:id" component={SinglePost} />
					<Route
						render={() =>
							<h1 className="notfound">Not found!</h1> ? (
								<Redirect to="/" />
							) : null
						}
					/>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
