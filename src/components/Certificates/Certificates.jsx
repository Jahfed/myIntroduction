import './Certificates.css';

export default function Certificates({ title, links }) {
    return (
        <div className="certificates">
            <h3>{title}</h3>
            {
                links.map((link, i) => {
                    return <div className="link" key={i}><a href={link.link} target="_blank">{link.title}</a><p>{link.description}</p></div>
                })
            }
        </div>
    )
}
