import Title from "../../src/components/Title.js";
import ContactForm from "../../src/components/ContactForm.tsx";
import Dropdown from "../../src/components/Faq.js";

export default function Contact() {
  return (
    <>
      <Title name={"CONTACT US"}/>
      
      <div id="faq">
        <Dropdown />
      </div>

      <h2 className="flex justify-center font-bold p-[.5rem]">
        Didn't find an answer in the FAQ above? Need to contact us? Please use the contact form below:
      </h2>

      <ContactForm />
    </>
  );
}
  