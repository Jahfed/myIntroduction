const parseLink = (text) => {
    const pattern = /<<([^>]*)>>/i;
    const link = text.match(pattern);
    return link ? link[1] : "";
}

const parseDescription = (text) => {
    const pattern = /<<([^>]*)>>/i;
    const description = text.replace(pattern, "");
    return description ? description : "";
}

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
                let myLink, myDescription;

                item.description && (myLink = parseLink(item.description), myDescription = parseDescription(item.description));

                const sortedInfo = {
                    "myGit": item.name,
                    "myGitUrl": item.html_url,
                    "myLink": myLink,
                    "myGitDescription": myDescription
                }

                gitInfo.push(sortedInfo);
            });
            return gitInfo;
        })
        .catch(error => console.log('error', error))

    return myGits;
}

myGits();

export default myGits;