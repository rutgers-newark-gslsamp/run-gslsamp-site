import Image from "next/image";
import searchIcon from "../../public/icons/search-icon.svg"

interface CopyrightProps {
  currentDate: Date;
}

const Copyright: React.FC<CopyrightProps> = ({ currentDate }) => {
  const year = currentDate instanceof Date ? currentDate.getFullYear() : new Date().getFullYear();
  
  return (
    <div className='flex flex-col items-center justify-center text-center px-3'>
      <div className="space-x-1 font-bold">
        <a className="hover:underline" href="rutgers.edu" target="_blank">Universitywide</a>
        <a className="hover:underline" href="https://newbrunswick.rutgers.edu/" target="_blank">New Brunswick</a>
        <a className="hover:underline" href="https://academichealth.rutgers.edu/" target="_blank">RBHS</a>
        <a className="hover:underline" href="https://newark.rutgers.edu/" target="_blank">Newark</a>
        <a className="hover:underline" href="https://camden.rutgers.edu/" target="_blank">Camden</a>
        <a className="hover:underline" href="https://online.rutgers.edu/" target="_blank">Online</a>
        <a className="hover:underline" href="https://rutgershealth.org/" target="_blank">Rutgers Health</a>
      </div>
      <a href="https://search.rutgers.edu" title="https://search.rutgers.edu" target='_blank' className="px-2 my-1 flex text-xs font-semibold text-neutral-100 hover:underline">
        Rutgers University Search
        <Image className='w-4 mx-1 ' src={searchIcon} alt="Search Icon" width={20} height={20} />
      </a>
      <p>
        Copyright © {currentDate.getFullYear()}, Rutgers, The State University of New Jersey
      </p>
      <p className='text-xs text-balance md:mx-16 lg:mx-64 text-neutral-200'>Rutgers is an equal access/equal opportunity institution. Individuals with disabilities are encouraged to direct suggestions, comments, or complaints concerning any accessibility issues with Rutgers websites to accessibility@rutgers.edu or complete the Report Accessibility Barrier / Provide Feedback Form.</p>
    </div>
  );
}

export default Copyright;
