import React from 'react';
import { v4 as uuid } from 'uuid';

import './SkillList.scss';

interface SkillListProps {
    skills: string[];
    isLimited?: boolean;
};

const SkillList:React.FC<SkillListProps> = (props) => {
    const { skills, isLimited = false } = props;
    const skillsSliced = isLimited ? skills.length > 3 ? skills.slice(0, 3) : skills : skills;

    return <div className="skills-list">
        {skillsSliced.map(s => (
            <div className="skills-list__skill" key={uuid()}>
                {s}
            </div>
        ))}
        {isLimited && '+'}
    </div>
}

export default SkillList;