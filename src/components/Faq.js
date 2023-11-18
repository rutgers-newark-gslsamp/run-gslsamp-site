'use client'

import { useState } from 'react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-gray-200 py-4">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <p className="text-lg font-medium">{question}</p>
        <div className="flex justify-end">
          {isOpen ? '-' : '+'}
        </div>
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
  const faqs = [
    {
      question: "How much does it cost to join?",
      answer: "RU-N GS-LSAMP is completely free to students and funded by The National Science Foundation."
    },
    {
      question: "Who is eligible to participate?",
      answer: "Minority students at Rutgers Newark in a STEM field."
    },
    {
        question: "How long is the program, and what is the time commitment?",
        answer: "Students are required to attend the mandatory meetings which occur a few times throughout the semester." + 
                "These can range from 30 minutes to 1 hour."
    },
    {
        question: "What kind of academic support or tutoring is available through the program?",
        answer: "Tutoring is always offered in our learning center. In the weeklynewsletter you will have access to available" + 
                "tutors."
    },
    {
        question: "Are there mentorship or networking opportunities available for participants?",
        answer: "There are many events hosted every month open to students which give opportunity to network with" + 
                " other students, staff and guest speakers."
    },
    {
        question: "Does the program provide resources or support for job placement after graduation?",
        answer: "Yes, in the weeklynewsletter there are links to various job opportunites in STEM and plenty of" + 
                " resume and job interview workshops during the semester to help prepare you."
    },
    {
        question: "Are there any scholarships or financial aids associated with the program?",
        answer: "Yes, students can recieve stipends for participating in research and working under a professor."
    },
    // ... add more FAQ items
  ];

  return (
    <div className="w-full max-w-xl mx-auto p-1 mt-10">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

export default FAQSection;
