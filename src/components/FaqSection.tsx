'use client' // Needed to avoid error message

import React, { useState } from 'react';
import FAQItem from './FaqItem';

interface FAQ {
    question: string;
    answer: string | JSX.Element;
}

const FAQSection: React.FC = () => {
    const [isSectionOpen, setIsSectionOpen] = useState(false);

    const toggleSection = () => {
    setIsSectionOpen(!isSectionOpen);
    };

const faqs: FAQ[] = [
    {
        question: "Who is eligible to participate in LSAMP?",
        answer: <p>You can find the participation information in our <a className='underline' href='/membership' target='_blank' title='Find more details in our MEMBERSHIP page'>membership page</a></p>
    },
    {
        question: "When can I join GS-LSAMP?",
        answer: "You can join GS-LSAMP as early as your freshman year. Any student enrolled or planning to enroll in a non-medical STEM major at Rutgers, Newark, is eligible to apply at any point during their time here. Some students even join right after Admitted Student Day as freshmen. We encourage you to join the program as soon as possible so that we can provide you with the support you need."

    },
    {
        question: "What is the time commitment required for participation?",
        answer: "To maintain an active status and eligibility for stipends and other opportunities, students are expected to attend several meetings per semester and meet with the program coordinator twice a semester. Additionally, students are encouraged to take full advantage of all workshops and opportunities offered by the program."
    },
    {
        question: "What academic support and tutoring services does the program offer?",
        answer: 
        <p>
            Rutgers University-Newark GS-LSAMP provides tutoring services based on availability and demand, academic bootcamps, professional and career development opportunities, and support for graduate school applications. For detailed information about these resources, please visit our <a className='underline' href='/membership' target='_blank' title='Find more details in our MEMBERSHIP page'>membership page</a>.
        </p>
        
    },
    {
        question: "Are there mentorship or networking opportunities available for participants?",
        answer: <p>Participants have access to a wide range of events and networking opportunities, including program meetings, the annual STEM Conference held every fall, speaker events, and more. To stay updated on current and upcoming events, please visit our <a className='underline' href='/events' target='_blank' title='Find more details in our EVENTS & OPPORTUNITIES page'>events page</a>.</p>
    },
    {
        question: "Does the program offer resources or support for post-graduation job placement?",
        answer: "Yes, the program provides extensive support for post-graduation job placement. Our weekly newsletter includes links to various job opportunities in STEM fields. Additionally, we offer resume workshops and job interview preparation sessions throughout the semester to help you succeed in your job search."
    },
    {
        question: "Are there any scholarships or financial aid opportunities associated with the program?",
        answer: "The program offers various financial aid opportunities to active students. Educational experience stipends are available and awarded upon successful completion of research projects with faculty, community outreach and leadership work (as a GS-LSAMP ambassador), web development through RUN GS-LSAMP, and participation in several internship opportunities at Rutgers University. Additionally, GS-LSAMP regularly shares information about financial resources in the weekly newsletter and other announcements. GS-LSAMP scholars also receive support throughout the application process."
    },
];

    return (
        <div className="w-full md:4/5 lg:w-3/5 md:max-w-2xl lg:max-w-5xl mx-auto p-1">
            <div className="mx-4 border-b-2 border-neutral-300 pt-4 pb-3 mb-1 cursor-pointer" onClick={toggleSection}>
                <div className='text-2xl font-extrabold flex justify-between text-neutral-800'>
                    <h2>Frequently Asked Questions</h2>
                    <span>{isSectionOpen && <p>&#11167;</p>}</span>

                    {!isSectionOpen && <p>&#11164;</p>}
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
