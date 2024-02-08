import { Octokit, App } from "octokit";

const myGits = async () => {
    const gitInfo = [];

    const octokit = new Octokit({
        auth: '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'
    })

    const response = await octokit.request('GET /user/repos', {
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })

    response.data.forEach(item => {
        gitInfo.push(
            {
                myGit: item.name,
                myGitUrl: item.html_url,
                myGitDescription: item.description
            }
        );
    });

    return gitInfo;
}

export default myGits;