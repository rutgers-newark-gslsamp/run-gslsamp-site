import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string | JSX.Element;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-gray-200 py-4 mx-4">
      <div className="cursor-pointer flex justify-between" onClick={() => setIsOpen(!isOpen)}>
        <p className="text-lg font-medium">{question}</p>
        <div className='text-2xl'>{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
}

export default FAQItem;
