import Title from "../../src/components/Title.js";
import diploma from "../../public/diploma.png";
import Image from 'next/image';

export default function Membership() {
    return (
      <>
        <Title name={"MEMBERSHIP"}/>

        <Image src={diploma} alt="Graduation Diploma" width={500} height={300} />


      </>
    );
  }