type Props = {
    src: string;
    name: string;
    profession: string;
}

const TeamMemberCard = ({ src, name, profession }: Props) => {
    return (
        <div className="employee-intro">
            <div className="employee-intro__image">
                <img src={src} alt={name} />
            </div>
            <h3 className="employee-intro__name">{name}</h3>
            <p className="employee-intro__job">{profession}</p>
        </div>
    )
}

export default TeamMemberCard
