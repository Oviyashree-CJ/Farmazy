import React from "react";
import "../assets/css/Terms.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TermsAndConditions = () => {
  return (
    <div>
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">Terms and Conditions</h2>
          <p className="text-center text-muted mb-5">
            Welcome to Farmazy. By accessing or using our website, you agree to be bound by these Terms and Conditions.
          </p>

          <h5>1. Eligibility</h5>
          <p>
            You must be at least 18 years old to use this platform. By placing an order, you confirm that you are legally capable of entering into binding contracts.
          </p>

          <h5>2. Product Listings and Availability</h5>
          <p>
            All products listed are subject to availability and prevailing market conditions. We strive to ensure accuracy in product descriptions, pricing, and availability, but occasional errors may occur. We reserve the right to cancel any orders with pricing or stock errors.
          </p>

          <h5>3. Pricing and Payment</h5>
          <p>
            Prices displayed on the website are inclusive of applicable taxes. Payments must be made online via UPI, debit/credit card, or net banking. Your order will be confirmed only upon successful payment.
          </p>

          <h5>4. Order Confirmation and Delivery</h5>
          <p>
            Once your order is confirmed, you will receive an email/SMS with order details and estimated delivery time. We aim to deliver within the mentioned timeframe; however, delays due to traffic, weather, or unforeseen circumstances may occur.
          </p>

          <h5>5. Delivery Charges</h5>
          <p>
            Delivery charges may vary based on order value, delivery location, or ongoing promotions. The final delivery fee will be shown before you complete the purchase.
          </p>

          <h5>6. Returns and Refunds</h5>
          <p>
            Perishable items once delivered cannot be returned unless they are damaged or incorrect. You must raise a complaint within 24 hours of delivery. Refunds, if applicable, will be processed to your original mode of payment within 5–7 business days.
          </p>

          <h5>7. Cancellation Policy</h5>
          <p>
            You may cancel an order before it is dispatched. Orders already out for delivery cannot be canceled. Farmazy reserves the right to cancel orders in case of payment issues, delivery address errors, or product unavailability.
          </p>

          <h5>8. User Account Responsibility</h5>
          <p>
            You are responsible for maintaining the confidentiality of your login credentials. Any activity under your account will be considered authorized by you. Notify us immediately of any unauthorized use.
          </p>

          <h5>9. Prohibited Use</h5>
          <p>
            You agree not to misuse the website for fraudulent purposes, reselling items, or interfering with the operation of the service. Legal action will be taken in case of violations.
          </p>

          <h5>10. Intellectual Property</h5>
          <p>
            All content, logos, product images, and site design are the intellectual property of Farmazy. Unauthorized reproduction or redistribution is strictly prohibited.
          </p>

          <h5>11. Limitation of Liability</h5>
          <p>
            Farmazy will not be liable for any indirect, incidental, or consequential damages resulting from use or inability to use our platform or services.
          </p>

          <h5>12. Changes to Terms</h5>
          <p>
            We may update these Terms & Conditions periodically. Continued use of Farmazy after such changes constitutes your acceptance of the new terms.
          </p>

          <h5>13. Contact Information</h5>
          <p>
            For any queries or complaints, you may contact us at <a href="mailto:support@farmazy.com">support@farmazy.com</a> or visit our <a href="/contact">Contact Us</a> page.
          </p>

          <div className="mt-5 text-center">
            <a href="/login" className="btn btn-light-green px-4 py-2">
              Go to Login
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
