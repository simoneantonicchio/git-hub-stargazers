const { getFavorites, getUser } = require("../../src/services/github-api")

describe('Test application API status', () => {
    
    it('Service: GET /repos/${owner}/${repo}/stargazers', async () => {
        const req = {
            owner: "octocat",
            repo: "Hello-World",
            page: 1
        }
        resp = await getFavorites(req);
        expect(resp.status).toBe(200)
    });

    it('Service: GET /users/${owner}}', async () => {
        resp = await getUser("octocat");
        expect(resp.status).toBe(200)
    });
});
