import Title from "../../src/components/Title.js";
import ContactForm from "../../src/components/ContactForm.tsx";
import Dropdown from "../../src/components/Faq.js";

export default function Contact() {
  return (
    <>
      <Title name={"CONTACT US"}/>
      <a href="#faq">
        <div id="contact-cta-mobile" className="flex justify-center h-[3rem]">
          <aside className="px-2 w-2/4 md:right-5 bg-gradient-to-t from-red-900 to-red-600 flex justify-center rounded flex flex-col">
              <nav className="justify-center m-1 gap-3 cta-button-wrapper text-center text-white">
                Find answers here!
              </nav>
          </aside>  
        </div>
      </a>

      <ContactForm />
      <div id="faq">
        <Dropdown />
      </div>
    </>
  );
}
  