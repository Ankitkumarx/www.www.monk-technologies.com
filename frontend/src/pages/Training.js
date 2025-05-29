import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import '../styles/training_page.scss';

// First, declare all module data constants
const moduleData = [
  {
    id: 'mlops',
    title: 'Module 1: Introduction to MLOps',
    topics: [
      {
        title: 'Understanding the need for MLOps',
        description: 'Learn why organizations need MLOps and how it solves challenges in ML deployment.'
      },
      {
        title: 'Differences between MLOps, DevOps, and DataOps',
        description: 'Compare and contrast these operational frameworks and understand their relationships.'
      },
      {
        title: 'Overview of the MLOps lifecycle',
        description: 'Explore the complete lifecycle from development to deployment and monitoring.'
      },
      {
        title: 'Roles and responsibilities of an MLOps engineer',
        description: 'Understand key responsibilities and required skills in MLOps engineering.'
      }
    ]
  },
  {
    title: 'Module 2: Data Management and Preprocessing',
    topics: [
      {
        title: 'Data collection and validation techniques',
        description: 'Master methods for gathering and validating data for ML applications.'
      },
      {
        title: 'Data transformation and feature engineering',
        description: 'Learn techniques for preparing and transforming data into meaningful features.'
      },
      {
        title: 'Tools: Pandas, NumPy, and Scikit-learn',
        description: 'Hands-on experience with essential Python libraries for data manipulation.'
      },
      {
        title: 'Best practices for data versioning',
        description: 'Implement effective strategies for maintaining data consistency and tracking changes.'
      }
    ]
  },
  {
    title: 'Module 3: Model Development and Experimentation',
    topics: [
      {
        title: 'Overview of model training and evaluation',
        description: 'Learn systematic approaches to training and evaluating ML models.'
      },
      {
        title: 'Experiment tracking with MLflow',
        description: 'Master MLflow for tracking experiments and managing model versions.'
      },
      {
        title: 'Hyperparameter tuning basics',
        description: 'Explore methods for optimizing model performance through parameter tuning.'
      },
      {
        title: 'Introduction to model registries',
        description: 'Understand how to manage and version control ML models effectively.'
      }
    ]
  },
  {
    title: 'Module 4: Model Packaging and Deployment',
    topics: [
      {
        title: 'Containerization with Docker',
        description: 'Learn to package ML models and dependencies into containers.'
      },
      {
        title: 'Serving models using BentoML',
        description: 'Master BentoML for creating standardized model serving APIs.'
      },
      {
        title: 'Deployment strategies: REST APIs and batch processing',
        description: 'Implement different deployment patterns for ML models.'
      },
      {
        title: 'Introduction to cloud deployment options',
        description: 'Explore various cloud platforms for deploying ML models at scale.'
      }
    ]
  },
  {
    title: 'Module 5: CI/CD for Machine Learning',
    topics: [
      {
        title: 'Setting up CI/CD pipelines for ML projects',
        description: 'Design and implement automated pipelines for ML workflows.'
      },
      {
        title: 'Integration with GitHub Actions and Jenkins',
        description: 'Learn to use popular CI/CD tools for automating ML processes.'
      },
      {
        title: 'Automating testing and deployment processes',
        description: 'Implement automated testing and reliable deployment strategies.'
      },
      {
        title: 'Monitoring pipeline performance',
        description: 'Set up monitoring systems for pipeline health and metrics.'
      }
    ]
  },
  {
    title: 'Module 6: Monitoring and Maintenance',
    topics: [
      {
        title: 'Monitoring model performance in production',
        description: 'Implement comprehensive monitoring for model performance and metrics.'
      },
      {
        title: 'Detecting and handling data drift',
        description: 'Learn techniques to identify and address data drift issues.'
      },
      {
        title: 'Logging and alerting mechanisms',
        description: 'Set up robust logging systems and effective alerting mechanisms.'
      },
      {
        title: 'Tools: Prometheus, Grafana, and ELK stack',
        description: 'Hands-on experience with industry-standard monitoring tools.'
      }
    ]
  },
  {
    title: 'Module 7: Capstone Project and Review',
    topics: [
      {
        title: 'End-to-end MLOps project implementation',
        description: 'Apply learned concepts in a comprehensive project covering the entire MLOps lifecycle.'
      },
      {
        title: 'Review of key concepts and best practices',
        description: 'Consolidate understanding of core MLOps principles and industry best practices.'
      },
      {
        title: 'Q&A session and feedback',
        description: 'Interactive session to clarify doubts and receive personalized feedback.'
      },
      {
        title: 'Discussion on real-world MLOps scenarios',
        description: 'Analyze and discuss practical case studies and implementation challenges.'
      }
    ]
  }
];

const genAIModuleData = [
  {
    id: 'genai', 
    title: 'Module 1: Introduction to Generative AI',
    topics: [
      {
        title: 'Understanding Generative AI and its applications',
        description: 'Learn the fundamentals of Generative AI and explore its real-world applications.'
      },
      {
        title: 'Overview of Large Language Models (LLMs)',
        description: 'Deep dive into the architecture and capabilities of Large Language Models.'
      },
      {
        title: 'Ethical considerations in Generative AI',
        description: 'Explore the ethical implications and responsible use of Generative AI technology.'
      },
      {
        title: 'Introduction to popular Generative AI tools',
        description: 'Hands-on experience with widely-used Generative AI platforms and tools.'
      }
    ]
  },
  {
    title: 'Module 2: Prompt Engineering Basics',
    topics: [
      {
        title: 'Crafting effective prompts for LLMs',
        description: 'Learn the art of writing clear, effective prompts for optimal AI responses.'
      },
      {
        title: 'Techniques: Zero-shot, Few-shot, and Chain-of-Thought prompting',
        description: 'Master different prompting techniques for various use cases.'
      },
      {
        title: 'Common pitfalls and how to avoid them',
        description: 'Identify and overcome common challenges in prompt engineering.'
      },
      {
        title: 'Hands-on exercises with prompt design',
        description: 'Practice creating and refining prompts through interactive exercises.'
      }
    ]
  },
  {
    title: 'Module 3: Retrieval-Augmented Generation (RAG)',
    topics: [
      {
        title: 'Understanding the RAG architecture',
        description: 'Learn the fundamentals of RAG and its role in enhancing AI responses.'
      },
      {
        title: 'Integrating external knowledge sources',
        description: 'Techniques for incorporating external data into AI systems.'
      },
      {
        title: 'Implementing RAG with vector databases',
        description: 'Hands-on experience with vector databases for efficient information retrieval.'
      },
      {
        title: 'Use cases and best practices',
        description: 'Explore practical applications and industry best practices for RAG.'
      }
    ]
  },
  {
    title: 'Module 4: Introduction to LangChain',
    topics: [
      {
        title: 'Overview of LangChain framework',
        description: 'Understanding the components and capabilities of LangChain.'
      },
      {
        title: 'Building applications with LangChain',
        description: 'Step-by-step guide to creating applications using LangChain.'
      },
      {
        title: 'Integrating LLMs with external tools and APIs',
        description: 'Learn to connect LLMs with various external services and tools.'
      },
      {
        title: 'Hands-on project using LangChain',
        description: 'Build a complete project implementing LangChain concepts.'
      }
    ]
  },
  {
    title: 'Module 5: Agentic AI and Autonomous Agents',
    topics: [
      {
        title: 'Concept of autonomous AI agents',
        description: 'Understanding the principles and applications of AI agents.'
      },
      {
        title: 'Designing and deploying AI agents',
        description: 'Learn to create and implement autonomous AI agents.'
      },
      {
        title: 'Tools and frameworks for Agentic AI',
        description: 'Explore popular tools and frameworks for building AI agents.'
      },
      {
        title: 'Ethical considerations and safety measures',
        description: 'Understanding the importance of responsible AI agent deployment.'
      }
    ]
  },
  {
    title: 'Module 6: Advanced Prompt Engineering Techniques',
    topics: [
      {
        title: 'Exploring advanced prompting strategies',
        description: 'Master sophisticated prompt engineering techniques.'
      },
      {
        title: 'Evaluating and refining prompt outputs',
        description: 'Learn methods to assess and improve prompt performance.'
      },
      {
        title: 'Case studies of successful prompt engineering',
        description: 'Analyze real-world examples of effective prompt engineering.'
      },
      {
        title: 'Hands-on exercises with complex prompts',
        description: 'Practice advanced prompting techniques through exercises.'
      }
    ]
  },
  {
    title: 'Module 7: Capstone Project and Review',
    topics: [
      {
        title: 'Developing a Generative AI application from scratch',
        description: 'Build a complete Generative AI solution incorporating course concepts.'
      },
      {
        title: 'Incorporating RAG, LangChain, and Agentic AI concepts',
        description: 'Integrate multiple technologies in a comprehensive project.'
      },
      {
        title: 'Peer review and feedback sessions',
        description: 'Collaborate with peers to improve your project.'
      },
      {
        title: 'Final Q&A and course wrap-up',
        description: 'Consolidate learning and address remaining questions.'
      }
    ]
  }
];

const devSecOpsModuleData = [
  {
    id: 'devsecops',  
    title: 'Module 1: Introduction to DevSecOps',
    topics: [
      {
        title: 'What is DevSecOps?',
        description: 'Understanding the fundamentals and core concepts of DevSecOps.'
      },
      {
        title: 'Differences between DevOps and DevSecOps',
        description: 'Exploring how DevSecOps extends DevOps with security practices.'
      },
      {
        title: 'The importance of "shift-left" security',
        description: 'Learn why early security integration is crucial in the development lifecycle.'
      },
      {
        title: 'Key principles: Automation, collaboration, and continuous security',
        description: 'Master the foundational principles that drive DevSecOps practices.'
      }
    ]
  },
  {
    title: 'Module 2: Secure Software Development Lifecycle (SSDLC)',
    topics: [
      {
        title: 'Overview of the SSDLC phases',
        description: 'Understanding each phase of the secure software development lifecycle.'
      },
      {
        title: 'Threat modeling and risk assessment',
        description: 'Learn to identify and assess security risks in your applications.'
      },
      {
        title: 'Secure coding practices',
        description: 'Master best practices for writing secure code across different languages.'
      },
      {
        title: 'OWASP Top 10 vulnerabilities',
        description: 'Deep dive into the most critical web application security risks.'
      }
    ]
  },
  {
    title: 'Module 3: Static and Dynamic Code Analysis',
    topics: [
      {
        title: 'Introduction to SAST (Static Application Security Testing)',
        description: 'Learn how to analyze source code for security vulnerabilities.'
      },
      {
        title: 'Introduction to DAST (Dynamic Application Security Testing)',
        description: 'Understand runtime security testing of web applications.'
      },
      {
        title: 'Hands-on with tools: SonarQube, Bandit, and OWASP ZAP',
        description: 'Practical experience with industry-standard security testing tools.'
      },
      {
        title: 'Integrating analysis tools into CI/CD pipelines',
        description: 'Implement automated security testing in your development pipeline.'
      }
    ]
  },
  {
    title: 'Module 4: Container and Dependency Security',
    topics: [
      {
        title: 'Understanding container vulnerabilities',
        description: 'Identify and mitigate security risks in containerized applications.'
      },
      {
        title: 'Scanning container images with Trivy and Docker Scout',
        description: 'Hands-on experience with container security scanning tools.'
      },
      {
        title: 'Managing software supply chain risks',
        description: 'Learn to secure your application dependencies and third-party components.'
      },
      {
        title: 'Dependency scanning tools: Snyk, GitHub Dependabot',
        description: 'Master tools for automated dependency vulnerability detection.'
      }
    ]
  },
  {
    title: 'Module 5: Security in CI/CD Pipelines',
    topics: [
      {
        title: 'Securing Git workflows and repositories',
        description: 'Implement security best practices in version control systems.'
      },
      {
        title: 'Secrets management in CI/CD (Vault, GitHub Actions secrets)',
        description: 'Learn to safely manage sensitive information in your pipelines.'
      },
      {
        title: 'Implementing signed commits and image signing',
        description: 'Ensure code and container integrity through digital signatures.'
      },
      {
        title: 'Hands-on with GitHub Actions or Jenkins pipelines',
        description: 'Build secure CI/CD pipelines with popular automation tools.'
      }
    ]
  },
  {
    title: 'Module 6: Monitoring, Logging & Incident Response',
    topics: [
      {
        title: 'Implementing security alerting and incident response',
        description: 'Set up effective security monitoring and response systems.'
      },
      {
        title: 'Centralized logging with ELK/EFK stack',
        description: 'Master centralized logging for security event management.'
      },
      {
        title: 'Integrating SIEM tools with DevSecOps workflows',
        description: 'Learn to integrate security information and event management tools.'
      },
      {
        title: 'Responding to breaches: real-world simulation',
        description: 'Practice incident response through realistic breach scenarios.'
      }
    ]
  },
  {
    title: 'Module 7: Capstone Project and Review',
    topics: [
      {
        title: 'Secure end-to-end application lifecycle',
        description: 'Build a complete application with integrated security practices.'
      },
      {
        title: 'Peer review of implemented DevSecOps practices',
        description: 'Collaborate and review security implementations with peers.'
      },
      {
        title: 'Q&A and feedback session',
        description: 'Interactive session to address questions and receive feedback.'
      },
      {
        title: 'Discussion on real-world DevSecOps practices and career paths',
        description: 'Explore industry practices and career opportunities in DevSecOps.'
      }
    ]
  }
];

const kubernetesModuleData = [
  {
    id: 'kubernetes',
    title: 'Module 1: Introduction to Kubernetes',
    topics: [
      {
        title: 'What is Kubernetes and why use it?',
        description: 'Understanding the fundamentals and benefits of container orchestration with Kubernetes.'
      },
      {
        title: 'Kubernetes vs traditional deployment methods',
        description: 'Compare Kubernetes with traditional deployment approaches and understand its advantages.'
      },
      {
        title: 'Core components: Cluster, Node, Pod, Service',
        description: 'Learn the essential building blocks of Kubernetes architecture.'
      },
      {
        title: 'Setting up a local cluster with Minikube or Kind',
        description: 'Hands-on experience setting up a local Kubernetes development environment.'
      }
    ]
  },
  {
    title: 'Module 2: Kubernetes Architecture and Objects',
    topics: [
      {
        title: 'Understanding Master and Worker nodes',
        description: 'Deep dive into Kubernetes cluster architecture and component roles.'
      },
      {
        title: 'Key objects: Deployments, ReplicaSets, Services, ConfigMaps, Secrets',
        description: 'Master the fundamental Kubernetes objects and their relationships.'
      },
      {
        title: 'Namespaces and resource quotas',
        description: 'Learn to organize and manage resources within a Kubernetes cluster.'
      },
      {
        title: 'Hands-on with kubectl',
        description: 'Practice using kubectl for cluster management and troubleshooting.'
      }
    ]
  },
  {
    title: 'Module 3: Deploying Applications on Kubernetes',
    topics: [
      {
        title: 'Writing and deploying Kubernetes manifests (YAML files)',
        description: 'Learn to create and manage Kubernetes resources using YAML manifests.'
      },
      {
        title: 'Managing rolling updates and rollbacks',
        description: 'Master deployment strategies and version control for applications.'
      },
      {
        title: 'Scaling applications manually and automatically',
        description: 'Implement horizontal pod autoscaling and manual scaling techniques.'
      },
      {
        title: 'Debugging pods and application failures',
        description: 'Learn troubleshooting techniques for common Kubernetes issues.'
      }
    ]
  },
  {
    title: 'Module 4: Working with Volumes and Configurations',
    topics: [
      {
        title: 'Kubernetes storage basics',
        description: 'Understanding storage concepts and options in Kubernetes.'
      },
      {
        title: 'Using Persistent Volumes and Persistent Volume Claims',
        description: 'Implement persistent storage solutions for stateful applications.'
      },
      {
        title: 'Injecting environment variables, ConfigMaps, and Secrets',
        description: 'Master configuration management and secret handling in Kubernetes.'
      },
      {
        title: 'Hands-on with stateful apps and storage',
        description: 'Practice deploying applications with persistent storage requirements.'
      }
    ]
  },
  {
    title: 'Module 5: Networking and Service Discovery',
    topics: [
      {
        title: 'Pod-to-pod communication and DNS in Kubernetes',
        description: 'Understanding Kubernetes networking model and service discovery.'
      },
      {
        title: 'Services: ClusterIP, NodePort, LoadBalancer',
        description: 'Learn different service types and their use cases.'
      },
      {
        title: 'Ingress controllers and traffic routing basics',
        description: 'Implement external access and routing for applications.'
      },
      {
        title: 'Hands-on with NGINX Ingress controller',
        description: 'Practice configuring and managing ingress resources.'
      }
    ]
  },
  {
    title: 'Module 6: Helm and Kubernetes Ecosystem',
    topics: [
      {
        title: 'Introduction to Helm and Helm charts',
        description: 'Learn package management for Kubernetes applications.'
      },
      {
        title: 'Installing and managing applications with Helm',
        description: 'Practice deploying applications using Helm charts.'
      },
      {
        title: 'Overview of popular tools: ArgoCD, Kustomize, K9s',
        description: 'Explore essential tools in the Kubernetes ecosystem.'
      },
      {
        title: 'CI/CD basics with Kubernetes',
        description: 'Understand continuous deployment practices for Kubernetes.'
      }
    ]
  },
  {
    title: 'Module 7: Capstone Project and Review',
    topics: [
      {
        title: 'Deploying a microservices app on Kubernetes',
        description: 'Build and deploy a complete microservices application.'
      },
      {
        title: 'Helm-based application deployment',
        description: 'Create and manage Helm charts for your application.'
      },
      {
        title: 'Observability: Metrics and logs',
        description: 'Implement monitoring and logging for your application.'
      },
      {
        title: 'Final Q&A, feedback, and career guidance',
        description: 'Review course concepts and discuss career opportunities.'
      }
    ]
  }
];

const Training = () => {
  const [activeModule, setActiveModule] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const ModuleSection = ({ title, modules }) => (
    <div className="module-section">
      <h2>{title}</h2>
      {modules.map((module, index) => (
        <div className="module-card" key={index}>
          <button 
            className="module-header"
            onClick={() => setActiveModule(activeModule === index ? null : index)}
          >
            {module.title}
            <span className={`toggle-icon ${activeModule === index ? 'open' : ''}`}>
              ▾
            </span>
          </button>
          
          <div className={`module-content ${activeModule === index ? 'open' : ''}`}>
            {module.topics.map((topic, tIndex) => (
              <div className="topic-card" key={tIndex}>
                <h4>{topic.title}</h4>
                <p>{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="training-container">
      <Header />
      <ScrollToTop />
      <div className="services_page">
        <div className="services_hero">
          <div className="container">
            <h1>Supporting your Cloud, Data, and AI Journey</h1>
            <p>We offer a variety of services for both enterprises and startups, focused around DevOps and dealing with data</p>
          </div>
        </div> 
        
            </div>
            <div className="train-container">
      
            <div id="mlops"> <ModuleSection title="MLOps Training" modules={moduleData}  /></div> 
      <div id="genai"> <ModuleSection title="Generative AI"   modules={genAIModuleData} /></div> 
      <div id="devsecops"> <ModuleSection title="DevSecOps" modules={devSecOpsModuleData} /></div> 
      <div id="k8s"><ModuleSection title="Kubernetes" modules={kubernetesModuleData} /></div> 
    </div>
    </div>
  );
};

export default Training;
