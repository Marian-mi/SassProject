import TeamMemberCard from './TeamMemberCard';
import { membersData } from './TeamData';

const Team = () => {
    return (
        <div className="team-intro">
            <h2 className="team-intro__title">Team</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa.</p>
            <div className="team-intro__cards-container">

                {membersData.map((item) => (
                    <TeamMemberCard
                        name={item.name}
                        profession={item.professtion}
                        src={item.image}
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Team
