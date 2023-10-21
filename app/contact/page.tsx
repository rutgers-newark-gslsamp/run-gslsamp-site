import Title from "../../src/components/Title.js";
import ContactForm from "../../src/components/ContactForm.jsx";
import Dropdown from "../../src/components/Faq.js";
import Nav from "../../src/components/Nav.js";

export default function Contact() {
    return (
      <>
        <Title name={"CONTACT US"}/>
        
        <ContactForm />

        <Dropdown />
      </>
    );
  }
  