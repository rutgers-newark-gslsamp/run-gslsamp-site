import React from "react";
import Image, { StaticImageData } from "next/image";

interface StaffCardProps {
    picture: StaticImageData;
    name: string;
    title: string;
    university: string;
    email: string;
    phone: string;
}

const StaffCard: React.FC<StaffCardProps> = ({ picture, name, title, university, email, phone }) => {
    return (
        <div className="">
            <Image
                src={picture}
                alt={name}
            />
            <div className="">
                <h3>{name}</h3>
                <div className="">
                    <p>
                        {title}<br/>
                        {university}<br/>
                        {email}<br/>
                        {phone}
                    </p>
                </div> 
            </div>
        </div>
    );
}

export default StaffCard;
