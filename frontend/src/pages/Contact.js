import React, { useEffect } from 'react';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import '../styles/contact.scss';

const Contact = () => {
  useEffect(() => {
    const loadForm = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na2",
          portalId: "40l72z",
          formId: "1uScDDy0zQUWqlMDfCNn0GA",
          target: "#hubspot-form-container",
          css: ""
        });
      }
    };

    // Check if HubSpot script is already loaded
    if (!window.hbspt) {
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.async = true;
      script.onload = () => loadForm();
      document.body.appendChild(script);
    } else {
      loadForm();
    }
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="contact_page">
        <div className="contact_hero">
          <div className="container">
            <h1>Contact Us</h1>
            <p>Get in touch with us for any questions or inquiries</p>
          </div>
        </div>

        <section className="contact_section">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="contact_info">
                  <h3>Get in Touch</h3>
                  <div className="info_items">
                    <div className="info_item">
                      <i className="fas fa-envelope"></i>
                      <div className="info_content">
                        <h5>Email Us</h5>
                        <p>support@monk-technologies.com</p>
                      </div>
                    </div>
                    <div className="info_item">
                      <i className="fas fa-map-marker-alt"></i>
                      <div className="info_content">
                        <h5>Our Locations</h5>
                        <p>Bengaluru | Hyderabad | Lagos | Nairobi | Delaware</p>
                      </div>
                    </div>
                    <div className="info_item">
                      <i className="fas fa-clock"></i>
                      <div className="info_content">
                        <h5>Business Hours</h5>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="contact_form">
                  <h3>Send us a Message</h3>
                  <p>Fill out the form below and we'll get back to you shortly.</p>
                  <div id="hubspot-form-container" className="form-container"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="map_section">
          <div className="container">
            <div className="map_container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986532934473!3d40.69714941945631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1641234567890!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;