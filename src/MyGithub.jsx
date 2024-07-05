import { useState, useEffect } from "react";

// Import data and modules
import { DATA } from './data/data.js';
import emailjs from '@emailjs/browser';
import myGits from './js/getMyGits.js';

// Import components
import Head from "./components/Head/Head.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Certificates from "./components/Certificates/Certificates.jsx";
import Personal from "./components/Personal/Personal.jsx";
import ReceiveMail from "./components/ReceiveMail/ReceiveMail.jsx";
import GitShowcase from "./components/GitShowcase/GitShowcase.jsx";

// Import visuals
import './MyGithub.css'
import fotoMe5 from './img/me/IMG_2215.jpg';

function Jahfed() {
    // const [newUser, setUserName] = useState('');
    // const [newMail, setUserMail] = useState('');
    // const [newMessage, setUserMessage] = useState('');
    // const [list, setList] = useState([]);
    // const [gits, setGits] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);

    // const result = [{ myGitUrl: 'empty', myGit: 'empty', myGitDescription: 'empty' }];

    // useEffect(() => {
    //     setIsLoading(true);
    //     const fetchGits = async () => {
    //         try {
    //             const response = await myGits();
    //             setGits(response);
    //         } catch (error) {
    //             setGits(result);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     }
    //     fetchGits();
    // }, [])

    //destructioring the data into smaller data objects
    const { info, skills, cloudLinks, certificates } = DATA;

    return (
        <>
            <div className="cv">
                <Head info={info} foto={fotoMe5} />

                <Skills title="&#128187; SKILLS" skills={skills} />
                <Certificates title="&#127757; AWS CLOUDLINKS" links={cloudLinks} />
                <Certificates title="&#128278; CERTIFICATES" links={certificates} />

                <Personal title="&#128129; PERSONAL INFORMATION" info={info} />

                <ReceiveMail title="&#128231; RECEIVE AN EMAIL" token="Z6T9O2OsCoMqCsuKh" />
            </div>

            <GitShowcase title="&#128190; ***MY GITS***" description="Visit my repositories:" gitLink="https://api.github.com/users/Jahfed/repos" />


        </>

    )
}

export default Jahfed;