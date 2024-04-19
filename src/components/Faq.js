'use client'

import { useState } from 'react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-gray-200 py-4">
      <div className="cursor-pointer flex justify-between" onClick={() => setIsOpen(!isOpen)}>
        <p className="text-lg font-medium">{question}</p>
        <div>{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
}

function FAQSection() {
  const [isSectionOpen, setIsSectionOpen] = useState(false);

  const toggleSection = () => {
    setIsSectionOpen(!isSectionOpen);
  };
  const faqs = [
    {
      question: "Who is eligible to participate?",
      answer: <p>See the participation information <a className='hover:underline' href='/membership' target='_blank'>HERE</a></p>
    },
    {
      question: "At what year can I join GS-LSAMP?",
      answer: "As early as freshman year. Any student matriculated at Rutgers, Newark, enrolled in or planning to enroll " + 
                "in a non medical STEM major can apply for the program at any point in their time at Rutgers Newark (some students " +
                " joined right out of Admitted Student Day as freshman). " +
                "We encourage you to enter the program as soon as possible, so we can support you as much as possible."
    },
    {
      question: "What is the time commitment for participation?",
      answer: "To maintain an active status and eligibility for stipends and other opportunities, students must attend several " +
              " meetings during the semester and meet with the program coordinator twice a semester. Students are encouraged " +
              " to take advantage of all the offered workshops and opportunities."
    },
    {
      question: "What kind of academic support or tutoring is available through the program?",
      answer: <p>RUN GSLSAMP offers tutoring based availability and demand, academic bootcamps, professional and career development opportunities,
         and graduate school application support. Detailed information about resources can be found <a className='hover:underline' href='/membership' target='_blank'>HERE</a></p>
    },
    {
      question: "Are there mentorship or networking opportunities available for participants?",
      answer: <p>There are a plethora of events and opportunities to network, including program meetings, the STEM Conference held every fall, speakers events, and more. To see current upcoming events, visit the <a className='hover:underline' href='/events' target='_blank'>EVENTS PAGE</a></p>
    },
    {
      question: "Does the program provide resources or support for job placement after graduation?",
      answer: "Yes, in the weekly newsletter there are links to various job opportunites in STEM and plenty of" + 
                " resume and job interview workshops during the semester to help prepare you."
    },
    {
      question: "Are there any scholarships or financial aids associated with the program?",
      answer: <p>
                Educational experience stipends are available to active students. Stipends are awarded upon successful completion of research
                experience with faculty, community outreach and leadership work (as a GS-LSAMP ambassador), Web development through RUN GS-LSAMP, 
                and several internship opportunities at Rutgers University. Additionally, GS-LSAMP shares many opportunities for financial 
                resources in the weekly newsletter and other announcements. GS-LSAMP scholars are provided support in the application process.
              </p>
    },
  ];

  return (
    <div className="w-full md:max-w-xl lg:max-w-3xl mx-auto p-1">
      <div className="border-b-2 border-gray-200 py-4 mb-[1rem] cursor-pointer" onClick={toggleSection}>
        <div className='text-2xl font-bold flex justify-between'>
          <h2>Frequently Asked Questions</h2>
          <span>{isSectionOpen ? '-' : '+'}</span>
        </div>
      </div>
      {isSectionOpen && (
        <div>
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FAQSection;
