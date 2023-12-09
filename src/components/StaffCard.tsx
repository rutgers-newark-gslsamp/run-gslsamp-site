import React from "react";
import Image, { StaticImageData } from "next/image";

interface StaffCardProps {
    picture: StaticImageData;
    name: string;
    role: string;
    university: string;
    email: string;
    phone: string;
}

const StaffCard: React.FC<StaffCardProps> = ({ picture, name, role, university, email, phone }) => {
    return (
        <div className="bg-white flex flex-col items-center justify-center m-4 p-2 shadow rounded-lg">
            <Image
                src={picture}
                alt={name}
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover"
            />
            <div className="text-center">
                <h3 className="text-lg font-bold">{name}</h3>
                <div className="w-full">
                    <p className="font-medium">{role}</p>
                    <p>{university}</p>
                    <i>{email}</i><br/>
                    <i>{phone}</i>
                </div> 
            </div>
        </div>
    );
}

export default StaffCard;
