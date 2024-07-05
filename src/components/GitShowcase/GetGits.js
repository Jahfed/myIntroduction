/*
Two helperfunctions to extract a website link from the description.
If the Github description contains << >> . Anything between that will be parsed as a link.

EXAMPLE: "This is my description. << www.link-to-showcase.nl >> Thanks for visiting."

parseLink returns: "www.link-to-showcase.nl" OR ""
parseDescription returns: "This is my description. Thanks for visiting." OR ""
*/
const parseLink = (text) => {
    const pattern = /<<([^>]*)>>/i;
    const link = text.match(pattern);
    return link ? link[1] : "";
}

const parseDescription = (text) => {
    const pattern = /<<([^>]*)>>/i;
    let description = text.replace(pattern, "");
    description = description.replace(/\/\//g, '');
    return description ? description : "";
}

/*
Returns a list of specific Git objects with info for the GitCards.
Info returned:

{
    myGit: Name of the Git repo
    myGitUrl: URL of the Git repo
    myLink: URL of the live website extracted from the description. IF available
    myGitDescription: Short description of the Git repo. IF available
}
*/
const myGits = async (gitLink) => {
    const gitInfo = [];

    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const myGits = await fetch(gitLink, requestOptions)
        .then(response => response.json())
        .then(result => {
            result.forEach(item => {
                let myLink, myDescription;
                const { description, name, html_url } = item;

                description && (myLink = parseLink(description), myDescription = parseDescription(description));

                const sortedInfo = {
                    "myGit": name,
                    "myGitUrl": html_url,
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

// myGits("https://api.github.com/users/Jahfed/repos"); --> uncomment to test.

export default myGits;