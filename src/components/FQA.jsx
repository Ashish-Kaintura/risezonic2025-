import React, { useState } from "react";

const faqs = [
  {
    question: "Which types of industry are you most experienced in?",
    answer:
      "We handle development services for a broad selection of industries, for example, eCommerce, education, real estate, hospitality and others. We develop unique strategies that match your business’s needs and your target audience.",
  },
  {
    question:
      " When should I expect to see the results of my digital marketing?",
    answer:
      "If SEO and content marketing are used, you should notice changes in 3 to 6 months, while paid advertising tends to provide results in only a few weeks.F",
  },
  {
    question:
      "Is it possible to choose custom digital marketing packages from you?",
    answer:
      "Absolutely. We plan and provide services that fit your goals, budget and level of digital knowledge. For clients who want either large-scale systems or limited campaigns, we are able to help.",
  },
  {
    question:
      "Are you able to make changes to an online site that is already working?",
    answer:
      "Yes. Along with WordPress website design, we help with speed, SEO, look on mobile devices and better user experience.",
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
