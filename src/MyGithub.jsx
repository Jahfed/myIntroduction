import { useState } from "react";
import myGits from './js/getMyGits.js';
import logoGit from './img/github-mark/github-mark-white.png';
import fotoMe from './img/me/jahfed-vierkant.jpg';
import './MyGithub.css'

const result = await myGits();

function Jahfed() {
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


    const [newItem, setNewItem] = useState('');
    const [list, setList] = useState([]);

    const userInput = (event) => {
        setNewItem(event.target.value);
    }

    const validateEmail = (isEmail) => {
        const emailRegex = /^[\w\S\.]+@[\w\S\.]+\.([a-z]{2,})$/i;
        console.log(isEmail);
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
            <img className="avatar" src={fotoMe} height="150px" />
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
            <p>visit my repositories (updated dynamically):</p>
            <div className="ghRepo">
                {
                    result.map((item, index) => (<p ><a href={item.myGitUrl} target="blanc" ><img src={logoGit} alt="GH_logo" height="30px" />   {item.myGit}</a> // {item.myGitDescription}</p>))
                }
            </div >
        </>

    )
}

export default Jahfed;