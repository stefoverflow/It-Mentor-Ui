import React from 'react';
import classNames from 'classnames';

import './PackageCard.scss';

type PackageCardProps = {
    title: string;
    checked: boolean;
    list: string[];
    onClick: () => void;
};

const PackageCard: React.FC<PackageCardProps> = (props) => {
    const { title, checked, list, onClick } = props;

    return <div onClick={onClick} className={classNames("package-card", {["package-card__checked"]: checked})}>
        {checked ?
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.4286 46H6.57143C2.94213 46 0 43.058 0 39.4286V6.57143C0 2.94213 2.94213 0 6.57143 0H39.4286C43.058 0 46 2.94213 46 6.57143V39.4286C46 43.058 43.058 46 39.4286 46ZM6.57143 6.57143V39.4286H39.4286V6.57143H6.57143ZM19.7143 34.0466L10.8429 25.3493L15.4429 20.6507L19.7143 24.8269L30.5571 14.0924L35.1571 18.7647L19.7143 34.0433V34.0466Z" fill="white"/>
            </svg>
        :                
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.4286 46H6.57143C2.94213 46 0 43.058 0 39.4286V6.57143C0 2.94213 2.94213 0 6.57143 0H39.4286C43.058 0 46 2.94213 46 6.57143V39.4286C46 43.058 43.058 46 39.4286 46ZM6.57143 6.57143V39.4286H39.4286V6.57143H6.57143ZM32.8571 32.8571H13.1429V13.1429H32.8571V32.8571Z" fill="#15172C"/>
            </svg>
        }

        <div className="package-card__title">
            {title}
        </div>
        <ul className="package-card__list">
            {list.map(l => <li>{l}</li>)}
        </ul>
    </div>
}

export default PackageCard;
