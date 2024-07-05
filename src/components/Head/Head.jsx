import './Head.css';

export default function Head({ info, foto }) {
    const { name, job, phoneNumber, email } = info;

    return (
        <div className="head">
            <img className="avatar" src={foto} />
            <div className="mainInfo">
                <h1 className="header">{name}</h1>
                <p className="persona">{job}</p>
                <p className="info">{phoneNumber} - {email} - please contact for more detailed information or request an email (see form below).</p>
                <p className="info">Recently retrained junior back-end or fullstack developer with a management and poblem-solving background. The previous jobs involved a lot of solution-based skills, critical thinking, quick adjustments and constant communication between different teams to get to the best end-product. These skills are now aimed at finding the best solution for your development-challenges. With recent retraining in back-end development and years of interest in coding and digital developments I am available to start directly on your next project. Please look around at some of the showcases or contact directly for more information.</p>
            </div>
        </div>
    )
}