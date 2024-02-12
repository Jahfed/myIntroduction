import { useState, useEffect } from "react";
import myGits from './js/getMyGits.js';
import logoGit from './img/github-mark/github-mark-white.png';
import fotoMe1 from './img/me/jahfed-vierkant.jpg';
import fotoMe2 from './img/me/IMG_1895.jpg';
import fotoMe3 from './img/me/IMG_2003.jpg';
import fotoMe4 from './img/me/IMG_2077.jpg';
import fotoMe5 from './img/me/IMG_2215.jpg';
import fotoMe6 from './img/me/IMG_2457.jpg';
import './MyGithub.css'

const result = [{ myGitUrl: 'empty', myGit: 'empty', myGitDescription: 'empty' }];

function Jahfed() {
    const [newItem, setNewItem] = useState('');
    const [list, setList] = useState([]);
    const [gits, setGits] = useState([]);

    useEffect(() => {
        const fetchGits = async () => {
            const response = await myGits();
            console.log(response);
            setGits(response);
        }
        fetchGits();
    }, [])

    // extra info
    const info = {
        name: "Jahfed Wismans",
        job: "Retrained: Back-End/Fullstack developer",
    }
    const skills = {
        skills: ["javascript", "node.js", "php", "html", "css", "express", "prisma", "mySQL"],
        newInterests: ["python", "C#/dotnet", "React", "Laravel", "Vite"],
        futureInterests: ["matrix calculations", "machine learning", "AI-development"]
    }

    const userInput = (event) => {
        setNewItem(event.target.value);
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
        if (validateEmail(newItem)) {
            setList([...list, { text: newItem }]);
        }
    }

    return (
        <>
            <img src={fotoMe6} alt="bckground" className="bgimg" />
            <img className="avatar" src={fotoMe5} />
            <h1 className="header">Job Info</h1>
            <p>{info.name} - {info.job}</p>
            <div className="skills">Current Skills: {skills.skills.map((skill, index) => { return <span>{skill}, </span> })}</div>
            <div className="skills">Newly Acquired Interests/Skills: {skills.newInterests.map((skill, index) => { return <span>{skill}, </span> })}</div>
            <div className="skills">Future Interests/Skills: {skills.futureInterests.map((skill, index) => { return <span>{skill}, </span> })}</div>
            <br />
            <hr />
            <br />

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="vul in" onChange={userInput} value={newItem} />
                <button type="submit" >Mail</button>
                <p>{newItem}</p>
            </form>
            <div class='list'>{
                list.map((item, index) => { return <span><p id={index}>{item.text} <button type="button" onClick={deleteItem}>Delete</button></p></span> })
            }</div>
            <br />
            <hr />

            <h2>My_Githubs</h2>
            <p>visit my repositories:</p>
            <div className="ghRepo">
                {
                    gits.map((item, index) => (<p ><a href={item.myGitUrl} target="blanc" ><img src={logoGit} alt="GH_logo" height="30px" />   {item.myGit}</a> // {item.myGitDescription}</p>))
                }
            </div >
        </>

    )
}

export default Jahfed;