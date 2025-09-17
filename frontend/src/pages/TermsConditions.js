import React from 'react';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import '../styles/policy-pages.scss';

const TermsConditions = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="terms-conditions-page">
        <div className="container">
          <h1>Terms and Conditions</h1>
          <div className="content">
            <section>
              <h2>Agreement to Terms</h2>
              <p>By accessing and using Monk Technologies' services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.</p>
            </section>

            <section>
              <h2>Services</h2>
              <p>Our services include but are not limited to:</p>
              <ul>
                <li>Cloud Solutions and Consulting</li>
                <li>DevOps Training Programs</li>
                <li>MLOps and GenAI Services</li>
                <li>Professional IT Consulting</li>
              </ul>
            </section>

            <section>
              <h2>Intellectual Property</h2>
              <p>All content, including but not limited to training materials, documentation, and software solutions provided by Monk Technologies, remains our intellectual property. Unauthorized use, reproduction, or distribution is prohibited.</p>
            </section>

            <section>
              <h2>User Responsibilities</h2>
              <p>Users of our services agree to:</p>
              <ul>
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of their accounts</li>
                <li>Use services in compliance with applicable laws</li>
                <li>Not engage in unauthorized access or use of our systems</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;