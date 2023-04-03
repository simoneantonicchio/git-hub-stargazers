import { Octokit } from "@octokit/rest";

/**
 * This file is the interface to interact with the GitHub REST API.
 */

// Octokit client with the auth token
export const octokit = new Octokit({
	  auth: process.env.GITHUB_TOKEN,
});

// Get branches from a repo and return the data
export const getFavorites = async (req ) => {
	const {owner,repo, page} = req;
	try {
		const response = await octokit.request(`GET /repos/${owner}/${repo}/stargazers`, {
			owner: owner,
			repo: repo,
			per_page: 30,
			page: page,
			});
			return response;
	} catch (error) {
		console.log(error);
	}
}

export const getUser = async ( owner ) => {
	try {
		const response = await octokit.request(`GET /users/${owner}`,{
			username: owner,
		});
			return response;
	} catch (error) {
		console.log(error);
	}
}
