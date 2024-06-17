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
            {universityURL ? 
                <a href={universityURL} target="_blank" className="hover:cursor-pointer hover:underline hover:shadow-gray-2 00 hover:shadow rounded-lg">
                    <Image
                        className="flex justify-center align-middle object-contain p-1 rounded-lg"
                        src={logo}
                        alt={`${universityName} Logo`}
                        width={200}
                        layout="fixed"
                        height={100}
                    />
                </a>
                :
                <Image
                    className="flex justify-center align-middle object-contain p-1 rounded-lg"
                    src={logo}
                    alt={`${universityName} Logo`}
                    width={200}
                    layout="fixed"
                    height={100}
                /> 
            }   
            <div className="h-1/2 text-sm text-center m-0 p-1 overflow-hidden overflow-ellipsis whitespace-wrap">
                <h3><b>{universityName}</b></h3>
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