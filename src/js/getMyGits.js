// const parseLink = (text) => {
//     const pattern = /<<([^>]*)>>/i;
//     const link = text.match(pattern);
//     return link ? link[1] : "";
// }

// const parseDescription = (text) => {
//     const pattern = /<<([^>]*)>>/i;
//     let description = text.replace(pattern, "");
//     description = description.replace(/\/\//g, '');
//     return description ? description : "";
// }

// const myGits = async (gitLink) => {
//     const gitInfo = [];

//     let requestOptions = {
//         method: 'GET',
//         redirect: 'follow'
//     };

//     const myGits = await fetch(gitLink, requestOptions)
//         .then(response => response.json())
//         .then(result => {
//             result.forEach(item => {
//                 let myLink, myDescription;

//                 item.description && (myLink = parseLink(item.description), myDescription = parseDescription(item.description));

//                 const sortedInfo = {
//                     "myGit": item.name,
//                     "myGitUrl": item.html_url,
//                     "myLink": myLink,
//                     "myGitDescription": myDescription
//                 }

//                 gitInfo.push(sortedInfo);
//             });
//             return gitInfo;
//         })
//         .catch(error => console.log('error', error))

//     return myGits;
// }

// myGits("https://api.github.com/users/Jahfed/repos");

// export default myGits;