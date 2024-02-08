import { Octokit, App } from "octokit";
import { config } from "dotenv";

const myGits = async () => {
    const gitInfo = [];

    const octokit = new Octokit({
        auth: process.env.TOKEN
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
    console.log(await gitInfo);
    return gitInfo;
}

export default myGits;