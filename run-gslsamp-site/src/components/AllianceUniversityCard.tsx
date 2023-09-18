import React from "react";

interface AllianceUniversityCardProps {
    universityName: string;
    universityLogo: string;
    universityContactName: string;
    universityContactEmail: string;
    universityContactPhone: string;
}

const AllianceUniversityCard: React.FC<AllianceUniversityCardProps> = (props) => {
    return (
        <div>
            <img id="alliance-university-logo" src={props.universityLogo} alt={`${props.universityName} Logo`} />
            <div>
                <h3>{props.universityName}</h3>
                <div id="alliance-university-contact">
                    <p>
                        {props.universityContactName}
                        <br />
                        <span>{props.universityContactEmail}</span>
                        <br />
                        {props.universityContactPhone}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AllianceUniversityCard;
