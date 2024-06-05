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
        <div className="md:w-64 h-64 flex flex-col items-center justify-center m-4 p-2 shadow rounded-lg bg-white">
            <Image
                src={picture}
                alt={name}
                className="w-32 h-32 rounded-full object-cover object-top"
            />
            <div className="text-center">
                <h3 className="text-base font-bold">{name}</h3>
                <div className="w-full text-sm">
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
