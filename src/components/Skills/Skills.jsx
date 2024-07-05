import './Skills.css';

export default function Skills({ title, skills }) {

    return (
        <div className="skills">
            <h3>{title}</h3>
            {
                skills.map((skill, i) => {
                    return <div className="skill" key={i}><b>{skill.title}</b><div className="list"> {skill.skills.map((s, i) => { return <span key={i}>{s},</span> })}</div></div>
                })
            }
        </div>
    )
}