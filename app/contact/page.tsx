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

      <ContactForm />
    </>
  );
}
  