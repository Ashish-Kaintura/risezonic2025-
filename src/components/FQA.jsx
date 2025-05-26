import React, { useState } from "react";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of purchase. Items must be in original condition.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 5-7 business days depending on your location.",
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, our customer support is available 24/7 via chat and email.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 py-20 ">
      <h2 className="text-3xl font-bold text-center mb-6 font-heading">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-xl p-4 ">
            <button
              className="w-full text-left flex justify-between items-center font-medium text-lg font-heading"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 font-body">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
