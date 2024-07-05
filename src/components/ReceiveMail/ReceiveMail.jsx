import { useState, useEffect } from "react";
import './ReceiveMail.css';
import emailjs from '@emailjs/browser';

export default function ReceiveMail({ title, token }) {

    //set Email JS token
    useEffect(() => {
        emailjs.init(token);
    }, [])

    //create mail info variables and setters
    const [newUser, setUserName] = useState('');
    const [newMail, setUserMail] = useState('');
    const [newMessage, setUserMessage] = useState('');
    const [list, setList] = useState([]);

    //set mail info
    const userMail = (event) => { setUserMail(event.target.value); }
    const userName = (event) => { setUserName(event.target.value); }
    const userMessage = (event) => { setUserMessage(event.target.value); }

    //a quick check on email validity
    const validateEmail = (isEmail) => {
        const emailRegex = /^[\w\S\.]+@[\w\S\.]+\.([a-z]{2,})$/i;
        if (emailRegex.test(isEmail)) {
            return true;
        } else {
            alert("invalid emaild address :(")
            return false;
        }
    }

    //delete the item from the list
    const deleteItem = (event) => {
        const id = event.target.id;
        list.splice(id, 1);
        setList([...list]);
    }

    //the email send logic - using EmailJs
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
        <div className="receiveMail">

            <h3>{title}</h3>
            <div className="contactForm">

                <form onSubmit={handleSubmit}>
                    <div className="interact"><input type="text" placeholder="your name" onChange={userName} value={newUser} />
                        <input type="text" placeholder="your email" onChange={userMail} value={newMail} />
                        <input type="hidden" placeholder="your message" onChange={userMessage} value={newMessage} />
                        <button type="submit" >Mail</button>
                    </div>

                    <p className="info">Please submit your info: {newUser} // {newMail}<br />Press "Mail" to receive an email with my info...</p>
                </form>

                <div className='list'>{
                    list.map((item, i) => { return <span key={i}><p id={i} className="info">{item.text} <button type="button" onClick={deleteItem}>Delete</button></p></span> })
                }</div>
            </div>
        </div>

    )
}