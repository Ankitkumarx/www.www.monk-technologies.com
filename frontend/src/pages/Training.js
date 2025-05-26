import React from 'react';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import '../styles/training.scss';

const Training = () => {
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

  return (
    <div className="training_page">
      <Header />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="training_hero">
        <div className="container">
          <h1>Professional Training Programs</h1>
          <p>Elevate your skills with industry-leading technical training programs designed to accelerate your career growth</p>
        </div>
      </section>

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
                  <div className="training_icon">
                    <i className={`fa ${program.icon}`}></i>
                  </div>
                  <h4>{program.title}</h4>
                  <p>{program.description}</p>
                  <ul className="topics-list">
                    {program.topics.map((topic, idx) => (
                      <li key={idx}>{topic}</li>
                    ))}
                  </ul>
                  <button className="read_more" onClick={() => window.open('https://docs.google.com/document/d/1pMDQhfoDAeApyNbmtbPTo-aH85q_oYjxdNeAlVPtYB4/edit?tab=t.0#heading=h.18r3g1gjyu39', '_blank')}>
                    Learn More
                  </button>
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
    </div>
  );
};

export default Training;