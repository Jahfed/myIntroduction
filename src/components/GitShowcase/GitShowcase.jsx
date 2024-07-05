import { useState, useEffect } from "react";
import './GitShowcase.css';
import myGits from './GetGits.js';
import logoGit from '../../img/github-mark/github-mark-white.png';


export default function GitShowcase({ title, description, gitLink }) {
    const [gits, setGits] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const result = [{ myGitUrl: 'empty', myGit: 'empty', myGitDescription: 'empty' }];

    useEffect(() => {
        setIsLoading(true);
        const fetchGits = async (gitLink) => {
            try {
                const response = await myGits(gitLink);
                setGits(response);
            } catch (error) {
                setGits(result);
            } finally {
                setIsLoading(false);
            }
        }
        fetchGits(gitLink);
    }, [])

    return (
        <div className="git">
            <h3>{title}</h3>
            <h5>{description}</h5>

            {isLoading && <div>My gits are loading...</div>}
            {!isLoading &&
                <div className="ghRepo">
                    {
                        gits.map((item, i) => (<p key={i} className="gitCards"><a href={item.myGitUrl} target="_blank" ><img src={logoGit} alt="GitHub logo" height="30px" />  git {item.myGit}</a> {item.myGitDescription} <a href={item.myLink} target="_blank" >{item.myLink}</a></p>))
                    }
                </div >
            }
        </div>
    )
}