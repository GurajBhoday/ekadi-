import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className={`faq-question ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
        <span>{question}</span>
        <span className={`arrow ${isOpen ? 'down' : 'right'}`}></span>
      </div>
      {isOpen && (
        <div className="faq-answer">
          {Array.isArray(answer) ? (
            <ul className="faq-answer-list">
              {answer.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{answer}</p>
          )}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="faq-container">
      <h2> Frequently Asked Questions</h2>
      <br></br>
      <FaqItem
        question="What is E-Kadi?"
        answer="It is an NFC business card that enables you to share your contact information with a single tap."
      />
      <FaqItem
        question="How does it work?"
        answer={`NFC business cards are similar to traditional business cards, except they have an embedded NFC (Near Field Communication) chip.
        This chip allows the card to be read by an NFC-enabled device, such as a smartphone.
        When the NFC business card is tapped on the device, it will open a website with your information.`}
      />
      <FaqItem
        question="How do I design my card?"
        answer={`You can download the guidelines and send us your logo and information. If you want a card designed for you, contact us, and our team will guide you through.`}
      />
      <FaqItem
        question="How do I change my information?"
        answer={`Since no information is stored on the card, you can tell us the changes you want to make. We will update the information, and you will see the changes. You do not need to print another card.`}
      />
      <FaqItem
        question="Does it work on any device?"
        answer="Yes, it works on both iPhone and Android devices."
      />
      <FaqItem
        question="Where do I tap the card?"
        answer={[
          'iPhone 7: Pull down the menu and click the NFC button and tap the card on the top of the device.',
          'iPhone X (onwards): Just tap the card on the top of the device.',
          'Samsung S (series): Tap at the back of the device next to the battery.',
          'Android: Other Android devices, tap at the top back of the device.',
        ]}
      />
      <FaqItem
        question="Don't have an NFC Device?"
        answer="Not to worry! If you do not have an NFC Device there is a QR code at the back of the card which can be scanned and used to save the information"
      />
      <FaqItem
        question="How long does it take for a card to be delivered?"
        answer="Delivery time is 24 Hours of approved artwork."
      />
       <FaqItem
        question="How do we protect your data?"
        answer="We have implement robust security and encrytion measures and follow industry best practices as per the new data protection act to ensure your information is safe. "
      />

</div>
  );
};

export default FAQ;
