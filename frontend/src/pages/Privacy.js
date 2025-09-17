import React from 'react';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import '../styles/policy-pages.scss';

const Privacy = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="privacy-page">
        <div className="container">
          <h1>Privacy Policy</h1>
          <div className="content">
            <section>
              <h2>Information We Collect</h2>
              <p>We collect and process the following types of information:</p>
              <ul>
                <li>Personal identification information (Name, email, phone number)</li>
                <li>Professional information (Company, job title)</li>
                <li>Training progress and assessment data</li>
                <li>Usage data from our platforms and services</li>
              </ul>
            </section>

            <section>
              <h2>How We Use Your Information</h2>
              <p>Your information is used for:</p>
              <ul>
                <li>Providing and improving our services</li>
                <li>Communicating about your training progress</li>
                <li>Sending relevant updates and announcements</li>
                <li>Maintaining security of our platforms</li>
              </ul>
            </section>

            <section>
              <h2>Data Protection</h2>
              <p>We implement robust security measures to protect your data:</p>
              <ul>
                <li>Encryption of sensitive information</li>
                <li>Regular security audits and updates</li>
                <li>Strict access controls and authentication</li>
                <li>Compliance with data protection regulations</li>
              </ul>
            </section>

            <section>
              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Request data correction or deletion</li>
                <li>Opt-out of marketing communications</li>
                <li>File a complaint with relevant authorities</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;