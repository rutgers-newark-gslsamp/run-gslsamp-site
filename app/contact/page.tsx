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
        <button className="flex-1 max-w-xs w-1/2 text-center bg-red-800 rounded-md p-2 mt-8 col-span-1 text-white font-bold shadow-md hover:scale-105 transition h-22">
          <a href="https://rutgers.ca1.qualtrics.com/jfe/form/SV_bluhi716z4Plfi6" target='_blank' className="text-lg break-words">Submit Your Questions Here</a>
        </button>
      </h2>

      {/*<ContactForm />*/}
    </>
  );
}
  