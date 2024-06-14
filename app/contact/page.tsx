import Title from "../../src/components/Title.tsx";
import ContactForm from "../../src/components/ContactForm.tsx";
import FAQSection from "../../src/components/FaqSection.tsx";

export default function Contact() {
  return (
    <>
      <Title name={"CONTACT US"}/>

      <div id="faq">
        <FAQSection />
      </div>

      <h2 className="flex justify-center italic font-semibold p-3 mx-4 text-center text-neutral-800">
        Didn't find an answer in the FAQ above? Need to contact us?
      </h2>

      <h2 className="flex text-2xl justify-center">
        <b>Please send any queries to oren.rabinovich@rutgers.edu.</b>
      </h2>

      {/*<ContactForm />*/}
    </>
  );
}
  