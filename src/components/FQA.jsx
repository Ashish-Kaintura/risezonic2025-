import React, { useState } from "react";

const faqs = [
  {
    question: " What services does Risezonic offer?",
    answer:
      "Risezonic is a digital marketing and consulting agency—we help businesses solve problems and grow their companies. Our main services include the following:Website design and development, digital marketing (SEO, social media, PPC), mobile app development, and specialized consulting services in sales and technology.",
  },
  {
    question: "Is Risezonic an offshore company?",
    answer:
      "Risezonic is a digital marketing agency and consulting company based in Delhi NCR, India. We service local clients in India and clients in other parts of the world to provide customized solutions to help brands find success in the digital space.",
  },
  {
    question: "How can digital marketing help my business?",
    answer:
      "Digital marketing helps your business find more online visibility, get potential customers to your website, and generate leads and, ultimately, sales. We use data-driven strategies such as search engine optimization (SEO), social media marketing (SMM), and pay-per-click (PPC) advertising so that we can reach the right audience in the most economical way possible and measure your return on investment (ROI).",
  },
  {
    question: "What is the difference between SEO and PPC?",
    answer:
      "SEO (Search Engine Optimization) is the process of optimizing your website for a better position in organic (unpaid) search results. PPC (Pay-Per-Click) advertising is a paid advertisement, in which case, you pay a fee each time someone clicks on your ad. Both SEO and PPC are important for driving traffic; SEO takes time and patience (long-term), and PPC is instant (short-term).",
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
