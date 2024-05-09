import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import myGits from './js/getMyGits.js';
import logoGit from './img/github-mark/github-mark-white.png';
import fotoMe1 from './img/me/jahfed-vierkant.jpg';
import fotoMe2 from './img/me/IMG_1895.jpg';
import fotoMe3 from './img/me/IMG_2003.jpg';
import fotoMe4 from './img/me/IMG_2077.jpg';
import fotoMe5 from './img/me/IMG_2215.jpg';
import fotoMe6 from './img/me/IMG_2457.jpg';
import './MyGithub.css'

function Jahfed() {
    const [newUser, setUserName] = useState('');
    const [newMail, setUserMail] = useState('');
    const [newMessage, setUserMessage] = useState('');
    const [list, setList] = useState([]);
    const [gits, setGits] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const result = [{ myGitUrl: 'empty', myGit: 'empty', myGitDescription: 'empty' }];

    useEffect(() => {
        setIsLoading(true);
        emailjs.init("Z6T9O2OsCoMqCsuKh");
        const fetchGits = async () => {

            try {
                const response = await myGits();
                console.log(response);
                setGits(response);
            } catch (error) {
                setGits(result);
            } finally {
                setIsLoading(false);
            }
        }
        fetchGits();
    }, [])

    // extra info
    const info = {
        name: "Jahfed Wismans",
        job: "Retrained: Back-End/Fullstack developer (Junior)",
        phone_number: "+316 227 222 95",
        email: "jahfed@icloud.com",
        previous_job: "Movie production / Location Management and Scouting",
        previous_url: "https://jahfed.com",
        hobby: "Music",
        hobby_url: "https://sharkytheband.nl"
    }

    const skills = [
        {
            title: "skills",
            skills: ["javascript", "node.js", "php", "html", "css", "express", "prisma", "mySQL"]
        },
        {
            title: "newInterests",
            skills: ["python (basics)", "C#/dotnet (basics)", "React", "Laravel", "Vite", "Angular", "Docker", "Kubernetes", "AWS"]
        },
        {
            title: "softSkills",
            skills: ["management", "planning", "communication", "teamwork", "budgets", "contracts"]
        },
        {
            title: "futureInterests",
            skills: ["matrix calculations", "machine learning", "AI-development"]
        }
    ]

    const cloudLinks = [
        {
            title: "Laravel",
            link: "http://ec2-3-255-86-249.eu-west-1.compute.amazonaws.com",
            description: "A simple application build with Laravel, connected to a MySQL database. This runs on a free instance of EC2, but can also be deployed as a full microservices app."
        },
        {
            title: "Bookstore API (Node.js - Express)",
            link: "http://ec2-18-185-94-202.eu-central-1.compute.amazonaws.com/books",
            description: "Deployment of an API for a bookstore with a REST API in node.js and Express. The bookstore is scalable, because all the functionalities are seperated, and the bookstore can also sell records in the future."
        },
        {
            title: "Booking API (Node.js - Express)",
            link: "http://ec2-3-67-69-32.eu-central-1.compute.amazonaws.com",
            description: "Deployment of the final API in Winc-Academy for a back-end booking API. A scalable REST API with JWT-token or Auth0 authentication, Sentry ErrorLogging, connnected to a database with Prisma ORM. Also possible to connect to a Planetscale or AWS database for scalability."
        },
        {
            title: "Flask Store API (Flask)",
            link: "http://ec2-18-199-90-249.eu-central-1.compute.amazonaws.com",
            description: "Deployment of a Flask API with JWT protected endpoints. Read the included Swagger Documentation for the respective endpoints."
        }
    ]

    const certificates = [
        {
            title: "Winc Certificate",
            link: "https://certificates.wincacademy.com/39bc2785-51d9-452e-94a2-a6cc0ac5063f#gs.4jt8uq",
            description: "skills: Node.js backend programming, Rest-API, Express, Prisma, Javascript, Node.js, Git, Postman, Tests, Python"
        },
        {
            title: "Udemy Certificate - Docker/Kubernetes",
            link: "https://www.udemy.com/certificate/UC-5b472554-e887-4531-b343-02a6ff802e81/",
            description: "skills: Docker, Kubernetes, basic AWS"
        },
        {
            title: "Udemy Certificate - Python/Flask",
            link: "https://www.udemy.com/certificate/UC-5b472554-e887-4531-b343-02a6ff802e81/",
            description: "skills: Rest-API, Python, Flask"
        }
    ]

    const userMail = (event) => {
        setUserMail(event.target.value);
    }

    const userName = (event) => {
        setUserName(event.target.value);
    }

    const userMessage = (event) => {
        setUserMessage(event.target.value);
    }

    const validateEmail = (isEmail) => {
        const emailRegex = /^[\w\S\.]+@[\w\S\.]+\.([a-z]{2,})$/i;
        if (emailRegex.test(isEmail)) {
            return true;
        } else {
            alert("invalid emaild address :(")
            return false;
        }
    }

    const deleteItem = (event) => {
        const id = event.target.id;
        list.splice(id, 1);
        console.log(list);
        setList([...list]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateEmail(newMail)) {
            setList([...list, { text: [newUser, " - ", newMail] }]);

            // const publicKey = "Z6T9O2OsCoMqCsuKh";
            emailjs.send("service_ih7hlql", "template_3l74l5i", {
                to_name: newUser,
                reply_to: newMail,
            });
        }
    }

    return (
        <>
            <div className="cv">
                <div className="head">
                    <img className="avatar" src={fotoMe5} />
                    <div className="mainInfo">
                        <h1 className="header">Job Info</h1>
                        <p className="persona">{info.name} - {info.job}</p>
                        <p className="info">{info.phone_number} - {info.email} - please contact for more detailed information or request an email (see form below).</p>
                        <p className="info">Recently retrained junior back-end or fullstack developer with a management and poblem-solving background. The jobs involved a lot of problem-solving skills, critical thinking, quick adjustments and constant communication between different teams to get to the best end-product. These skills are now aimed at finding the best solution for your development-challenges. With recent retraining in back-end development and years of interest in coding and digital developments I am available to start directly on your next project. Please look around at some of the showcases or contact directly for more information.</p>
                    </div>
                </div>
                <div className="skills">
                    <h3>&#128187; SKILLS</h3>
                    {
                        skills.map((skill, i) => {
                            return <div className="skill" key={i}><b>{skill.title}</b><div className="list"> {skill.skills.map((s, i) => { return <span key={i}>{s}, </span> })}</div></div>
                        })
                    }
                </div>

                <div className="cloudLinks">
                    <h3>&#127757; AWS CLOUDLINKS</h3>
                    {
                        cloudLinks.map((cloudLink, i) => {
                            return <div className="cloudLink" key={i}><a href={cloudLink.link} target="_blank">{cloudLink.title}</a><p>{cloudLink.description}</p></div>
                        })
                    }
                </div>

                <div className="certificates">
                    <h3>&#128278; CERTIFICATES</h3>
                    {
                        certificates.map((certificate, i) => {
                            return <div className="certificate" key={i}><a href={certificate.link} target="_blank">{certificate.title}</a><p>{certificate.description}</p></div>
                        })
                    }
                </div>

                <div className="personal">
                    <h3>&#128129; PERSONAL INFORMATION</h3>
                    <p>My previous job was: {info.previous_job} - <a href={info.previous_url} target="_blank">{info.previous_url}</a>
                        <br /> Hobbies: {info.hobby} - <a href={info.hobby_url} target="_blank">{info.hobby_url}</a></p>
                </div>

                <h3>&#128231; RECEIVE AN EMAIL</h3>
                <div className="contactForm">

                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="your name" onChange={userName} value={newUser} />
                        <input type="text" placeholder="your email" onChange={userMail} value={newMail} />
                        <input type="hidden" placeholder="your message" onChange={userMessage} value={newMessage} />
                        <button type="submit" >Mail</button>
                        <p className="info">Please submit your info: {newUser} // {newMail}<br />Press "Mail" to receive an email with my info...</p>
                    </form>

                    <div class='list'>{
                        list.map((item, i) => { return <span key={i}><p id={i} className="info">{item.text} <button type="button" onClick={deleteItem}>Delete</button></p></span> })
                    }</div>
                </div>

            </div>


            <br />

            <div className="git">
                <h3>&#128190; ***MY GITS***</h3>
                <h5>Visit my repositories:</h5>

                {isLoading && <div>My gits are loading...</div>}
                {!isLoading &&
                    <div className="ghRepo">
                        {
                            gits.map((item, i) => (<p key={i} className="gitCards"><a href={item.myGitUrl} target="_blank" ><img src={logoGit} alt="GH_logo" height="30px" />  git {item.myGit}</a> // {item.myGitDescription} // <a href={item.myLink} target="_blank" >{item.myLink}</a></p>))
                        }
                    </div >
                }
            </div>


        </>

    )
}

export default Jahfed;