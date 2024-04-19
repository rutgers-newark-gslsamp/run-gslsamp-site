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

      <h2 className="flex justify-center italic font-semibold p-3 text-neutral-800">
        Didn't find an answer in the FAQ above? Need to contact us? Please use the contact form below:
      </h2>

      <ContactForm />
    </>
  );
}
  