import React from 'react';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import '../styles/policy-pages.scss';

const CancellationRefunds = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="cancellation-refunds-page">
        <div className="container">
          <h1>Cancellation & Refunds Policy</h1>
          <div className="content">
            <section>
              <h2>Training Program Cancellation</h2>
              <p>We understand that circumstances may change. Our cancellation policy for training programs is as follows:</p>
              <ul>
                <li>Full refund if cancelled 7 days before the program start date</li>
                <li>50% refund if cancelled between 3-7 days before the program</li>
                <li>No refund for cancellations within 72 hours of the program start</li>
              </ul>
            </section>

            <section>
              <h2>Consulting Services</h2>
              <p>For our consulting and professional services:</p>
              <ul>
                <li>Projects cancelled before commencement: Full refund minus 10% administrative fee</li>
                <li>Projects cancelled during execution: Prorated refund based on work completed</li>
                <li>Non-refundable: Custom solutions already delivered or implemented</li>
              </ul>
            </section>

            <section>
              <h2>Refund Process</h2>
              <p>To request a refund:</p>
              <ol>
                <li>Contact our support team at support@monk-technologies.com</li>
                <li>Provide your order/enrollment details</li>
                <li>State your reason for cancellation</li>
                <li>Refunds will be processed within 5-7 business days</li>
              </ol>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default CancellationRefunds;