import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import '../styles/main.scss';
import '../styles/hero.scss';
import '../styles/service.scss';
import '../styles/training.scss';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Cloud Solutions",
      description: "Transform your business with our cutting-edge cloud infrastructure and DevOps solutions. We help organizations achieve scalability, reliability, and efficiency in their digital operations.",
      image: "/images/slider-img.png",
      cta: { text: "Explore Solutions", link: "/services" }
    },
    {
      title: "DevOps Excellence",
      description: "Streamline your development and operations with our comprehensive DevOps services. From CI/CD pipelines to infrastructure automation, we've got you covered.",
      image: "/images/slider-img.png",
      cta: { text: "Learn More", link: "/services#devops" }
    },
    {
      title: "24/7 Support",
      description: "Our expert team provides round-the-clock support to ensure your cloud infrastructure runs smoothly. We're here to help you succeed in your digital transformation journey.",
      image: "/images/slider-img.png",
      cta: { text: "Contact Support", link: "/contact" }
    }
  ];
  const trainingPrograms = [
    {
      title: 'DevOps',
      description: 'Master the art of DevOps with our comprehensive program covering CI/CD, containerization, automation, and infrastructure as code. Learn industry-leading tools and best practices for streamlined software delivery.',
      icon: 'fa-cogs',
      topics: ['CI/CD Pipelines', 'Docker & Kubernetes', 'Infrastructure as Code', 'Cloud Platforms']
    },
    {
      title: 'MLOps',
      description: 'Bridge the gap between Machine Learning and Operations with our specialized MLOps training. Learn to automate ML pipelines, manage model deployments, and implement robust monitoring systems.',
      icon: 'fa-brain',
      topics: ['ML Pipeline Automation', 'Model Deployment', 'Model Monitoring', 'Data Version Control']
    },
    {
      title: 'Generative AI',
      description: 'Dive into the cutting-edge world of Generative AI. Learn to work with large language models, create AI applications, and implement state-of-the-art generative models for real-world applications.',
      icon: 'fa-robot',
      topics: ['Large Language Models', 'Prompt Engineering', 'AI Application Development', 'Model Fine-tuning']
    },
    {
      title: 'Cloud Engineering',
      description: 'Become an expert in cloud technologies with our comprehensive cloud engineering program. Master major cloud platforms, architecture design, security best practices, and cloud-native development.',
      icon: 'fa-cloud',
      topics: ['Cloud Architecture', 'Security & Compliance', 'Serverless Computing', 'Cost Optimization']
    }
  ];

  useEffect(() => {
    // Update the display year in the footer
    const displayYear = document.getElementById('displayYear');
    if (displayYear) {
      displayYear.textContent = new Date().getFullYear();
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
  
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="hero_area">
        <div className="hero_bg_box">
          <div className="bg_img_box">
            <img src="/images/hero-bg.png" alt="" />
          </div>
        </div>

        <Header />

        <section className="slider_section">
          <div id="customCarousel1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {slides.map((slide, index) => (
                <div key={index} className={`carousel-item ${index === currentSlide ? 'active' : ''}`}>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="detail-box">
                          <h1 className="slide-title">{slide.title}</h1>
                          <p className="slide-description">{slide.description}</p>
                          <div className="btn-box">
                            <Link to={slide.cta.link} className="btn1">
                              <span>{slide.cta.text}</span>
                              <i className="fas fa-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="img-box">
                          <img src={slide.image} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <ol className="carousel-indicators">
              {slides.map((_, index) => (
                <li
                  key={index}
                  className={index === currentSlide ? 'active' : ''}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </ol>
            
            <button className="carousel-control-prev" onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}>
              <span className="carousel-control-prev-icon" />
            </button>
            <button className="carousel-control-next" onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}>
              <span className="carousel-control-next-icon" />
            </button>
          </div>
        </section>
      </div>
      
      <section className="trusted_by_section">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="container">
          <div className="heading_container">
            <h2>Empowering Digital Innovation 
               <span> Through Technology</span></h2>
            <p>
             We help businesses transform their digital landscape with cutting-edge cloud solutions, DevOps practices, and innovative technologies that drive growth and efficiency.
            </p>
          </div>
          <h3>Technology Partners</h3>
          <div className="companies_circle">
            <div className="company_logo">
              <img src="/images/companies/aws.png" alt="AWS Partner" />
            </div>
            <div className="company_logo">
              <img src="/images/companies/google-cloud.png" alt="Google Cloud Partner" />
            </div>
            <div className="company_logo">
              <img src="/images/companies/azure.png" alt="Microsoft Azure Partner" />
            </div>
            <div className="company_logo">
              <img src="/images/companies/kubernetes.png" alt="Kubernetes Certified" />
            </div>
            <div className="company_logo">
              <img src="/images/companies/docker.png" alt="Docker Certified" />
            </div>
            <div className="company_logo">
              <img src="/images/companies/github.png" alt="GitHub Partner" />
            </div>
          </div>
        </div>
      </section>

      <section className="service_section">
        <div className="service_container">
          <div className="container">
            <div className="heading_container">
              <h2>
                Our <span>Solutions</span>
              </h2>
              <p>
                Delivering enterprise-grade cloud and DevOps solutions that transform businesses. Our expertise spans across modern infrastructure, automation, and security to accelerate your digital journey.
              </p>
            </div>
            <div className="row">
              {[
                {
                  icon: "fa-cloud",
                  title: "Cloud Migration",
                  description: "Enterprise-grade cloud solutions with seamless migration strategies, optimized performance, and cost management."
                },
                {
                  icon: "fa-code-branch",
                  title: "DevOps & Automation",
                  description: "Modern CI/CD pipelines, infrastructure as code, and automated workflows that accelerate delivery and improve reliability."
                },
                {
                  icon: "fa-shield-alt",
                  title: "Security & Compliance",
                  description: "Comprehensive cloud security solutions with continuous monitoring, threat detection, and compliance management."
                }
              ].map((service, index) => (
                <div className="col-md-4" key={index}>
                  <div className="box" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="img-box">
                      <i className={`fas ${service.icon}`} aria-hidden="true"></i>
                    </div>
                    <div className="detail-box">
                      <h5>{service.title}</h5>
                      <p>{service.description}</p>
                      <Link to="/services" className="solutions-btn">
                        Explore Solutions <i className="fas fa-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
    <div className="training_page">
      
      {/* Hero Section */}

      {/* Training Programs Section */}
      <section className="training_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our <span>Training Programs</span></h2>
            <p>Comprehensive training programs designed and delivered by industry experts</p>
          </div>

          <div className="row">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="training_box">
                  <div className="program_header">
                    <div className="program_icon">
                      <i className={`fa ${program.icon}`}></i>
                    </div>
                    <h4>{program.title}</h4>
                  </div>
                  <p>{program.description}</p>
                  <ul className="topics-list">
                    {program.topics.map((topic, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check"></i>
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <Link to="/training" className="learn_more">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="training_cta">
            <h3>Ready to Advance Your Career?</h3>
            <p>Join our training programs and gain the skills needed to excel in today's tech industry</p>
            <button className="enroll_btn">Enroll Now</button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact_content">
                <h2>Ready to Get Started?</h2>
                <p>Have a project in mind? Let's discuss how we can help bring your vision to life. Our team is ready to assist you with innovative solutions and expert guidance.</p>
                <div className="contact_features">
                  <div className="feature_item">
                    <i className="fas fa-check-circle"></i>
                    <span> 24/7 Support Available </span>
                  </div>
                  <div className="feature_item">
                    <i className="fas fa-check-circle"></i>
                    <span> Free Consultation </span>
                  </div>
                  <div className="feature_item">
                    <i className="fas fa-check-circle"></i>
                    <span> Custom Solutions </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact_cta">
                <h3>Let's Start Your Project</h3>
                <p>Get in touch with us today and take the first step towards your digital success.</p>
                <Link to="/contact#contact-form" className="btn btn-primary btn-lg">
                  Contact Us Now
                  <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;