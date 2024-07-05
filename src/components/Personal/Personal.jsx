import './Personal.css';

export default function Personal({ title, info }) {
    const { previousJob, previousUrl, hobby, hobbyUrl } = info;
    return (
        <div className="personal">
            <h3>{title}</h3>
            <p>My previous job was: {previousJob} - <a href={previousUrl} target="_blank">{previousUrl}</a>
                <br /> Hobbies: {hobby} - <a href={hobbyUrl} target="_blank">{hobbyUrl}</a></p>
        </div>
    )
}