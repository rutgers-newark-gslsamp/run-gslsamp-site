import Image from "next/legacy/image";
import { StaticImageData } from "next/legacy/image";

interface AllianceCardProps {
    logo: StaticImageData;
    universityName: string;
    universityURL?: string;
    contactName: string;
    contactEmail: string;
    contactPhone: string;
}

const AllianceCard: React.FC<AllianceCardProps> = ({ logo, universityName, universityURL, contactName, contactEmail, contactPhone }) => {
    return (
        <div className="bg-white flex flex-col items-center justify-between align-middle p-1 m-1 max-h-56 max-w-56 shadow rounded-lg hover:bg-gray-300 hover:transition duration-500">
            <Image
                className="flex justify-center align-middle object-contain p-1 rounded-lg"
                src={logo}
                alt={`${universityName} Logo`}
                width={100}
                layout="fixed"
                height={100}
            />
            <div className="h-1/2 text-sm text-center m-0 p-1 overflow-hidden overflow-ellipsis whitespace-nowrap">
                {/* if url is null, no cursor click on hover */}
                {universityURL ? 
                    <h3>
                        <a href={universityURL} target="_blank" className="hover:cursor-pointer hover:underline">
                            {universityName}
                        </a>
                    </h3>
                : 
                    <h3>{universityName}</h3>
                } 
                <div>
                    <p>
                        {contactName}
                        <br/>
                        <span>{contactEmail}</span>
                        <br/>
                        {contactPhone}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AllianceCard;