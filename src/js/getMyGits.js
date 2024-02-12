const myGits = async () => {
    const gitInfo = [];

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const myGits = await fetch("https://api.github.com/users/Jahfed/repos", requestOptions)
        .then(response => response.json())
        .then(result => {
            result.forEach(item => {
                const sortedInfo = {
                    "myGit": item.name,
                    "myGitUrl": item.html_url,
                    "myGitDescription": item.description
                }
                gitInfo.push(sortedInfo);
            });
            return gitInfo;
        })
        .catch(error => console.log('error', error))

    return myGits;
}

export default myGits;