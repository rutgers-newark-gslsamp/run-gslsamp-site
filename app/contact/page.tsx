import Title from "../components/Title.js";
import ContactForm from "../components/ContactForm";
import Dropdown from "../components/Faq.js";
import Nav from "../components/Nav.js";

export default function Contact() {
    return (
      <>
        {/**FIXME: Nav bar isn't rendering from layout */}
        <Title name={"Contact Us!"}/>
        
        <ContactForm />

        <Dropdown />
      </>
    );
  }
  