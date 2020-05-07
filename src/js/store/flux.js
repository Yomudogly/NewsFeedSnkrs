const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			posts: [],
			singlePost: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			openSinglePost: () => {
				fetch(
					"https://yankeekicks.com/wp-json/better-rest-endpoints/v1/posts?per_page=54"
				)
					.then(response => {
						//console.log(resp.ok); // will be true if the response is successfull
						//console.log(resp.status); // the status code = 200 or code = 400 etc.
						//console.log(resp.text()); // will try return the exact result as string
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(results => {
						setStore({
							...getStore,
							singlePost: results
						});
					})
					.catch(error =>
						//error handling
						console.log("Looks like there was a problem: \n", error)
					);
			},
			loadPosts: () => {
				fetch(
					"https://yankeekicks.com/wp-json/better-rest-endpoints/v1/posts?per_page=54&content=false"
				)
					.then(response => {
						//console.log(resp.ok); // will be true if the response is successfull
						//console.log(resp.status); // the status code = 200 or code = 400 etc.
						//console.log(resp.text()); // will try return the exact result as string
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(results => {
						setStore({
							...getStore,
							posts: results
						});
					})
					.catch(error =>
						//error handling
						console.log("Looks like there was a problem: \n", error)
					);
			}
		}
	};
};

export default getState;
