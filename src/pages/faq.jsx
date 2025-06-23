import React from 'react';
import '../assets/css/faq.css';

const Faq = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>

      <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
              How do I place an order?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              You can browse products on our <a href="/products">Products</a> page, add them to your cart, and proceed to checkout.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
              What payment methods do you accept?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              We accept credit/debit cards, UPI, and cash on delivery.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
              Can I return or exchange items?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Yes, you can return or exchange items within 7 days of delivery. <a href="/contact">Contact</a> our support for assistance.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
              How long does delivery take?
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Delivery usually takes 24-48 hours within the city.
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <a href="/" className="btn btn-success">Back to Home</a>
      </div>
    </div>
  );
};

export default Faq;
