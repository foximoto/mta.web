import React from "react";

function Faq() {
  const faqContent = [
    {
      question: "What kind of Locations are there?",
      answer:
        "The MTA’s accredited Locations are related to Kerala Tourism. Some are local, some are national. All are rewarding and interesting.",
    },
    {
      question: "Who determines which locations to visit?",
      answer:
        "The Rally Masters select the Locations. Everyone is welcome to make suggestions.",
    },
    {
      question: "What happens if I don’t visit all the sites?",
      answer:
        "Nothing other than hopefully having the experience of visiting at least one.",
    },
  ];
  return (
    <div className="mt-8">
      <div className="join join-vertical w-full">
        {faqContent.map((faq, index) => (
          <div
            className="collapse collapse-arrow join-item border-base-300 border"
            key={index}
          >
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-base font-medium">
              {faq.question}
            </div>
            <div className="collapse-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
