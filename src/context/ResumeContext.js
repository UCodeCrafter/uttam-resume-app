import React, { createContext, useContext, useState, useEffect } from 'react';
import { isFirebaseConfigured, subscribeToResumeData } from '../firebase';

const ResumeContext = createContext();

const defaultSkillsData = [
  {
    category: "Java & Advanced Backend",
    icon: "☕",
    skills: ["Java 17/21", "Spring Boot 3", "Spring Microservices", "Spring Security", "Hibernate / JPA", "REST & gRPC APIs", "Apache Kafka", "Redis Cache"],
    descriptions: "Building high-performance, fault-tolerant enterprise microservices and distributed backend systems.",
    progressSkills: [
      { name: "Java 17/21 & Core Concepts", level: 95 },
      { name: "Spring Boot & Microservices", level: 92 },
      { name: "Hibernate / JPA & ORM", level: 90 },
      { name: "Kafka & Event-Driven Architecture", level: 88 }
    ]
  },
  {
    category: "Frontend & Web Technologies",
    icon: "⚡",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux Toolkit", "HTML5 & CSS3", "Tailwind CSS", "Framer Motion"],
    descriptions: "Crafting modern, responsive, high-performance web applications with rich user interfaces.",
    progressSkills: [
      { name: "React.js & State Management", level: 92 },
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "Modern CSS & Responsive Design", level: 94 }
    ]
  },
  {
    category: "Databases, Cloud & DevOps",
    icon: "☁️",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS (EC2, S3, RDS)", "Git & CI/CD", "Maven & Gradle"],
    descriptions: "Managing relational & NoSQL databases, containerization, and continuous deployment pipelines.",
    progressSkills: [
      { name: "PostgreSQL & Database Tuning", level: 90 },
      { name: "Docker & Containerization", level: 86 },
      { name: "CI/CD & DevOps Automation", level: 88 }
    ]
  },
  {
    category: "System Design & Architecture",
    icon: "📐",
    skills: ["Microservices Architecture", "Distributed Systems", "Design Patterns (GoF)", "REST vs gRPC", "Caching Strategies", "Scalability & High Availability"],
    descriptions: "Designing resilient, scalable enterprise architectures and adhering to clean code design principles."
  }
];

const defaultPersonalData = {
  name: "Uttam Modi",
  title: "Senior Full Stack Java & React Developer",
  typingTitles: [
    "Senior Java 17/21 Developer",
    "Spring Boot & Microservices Architect",
    "React.js & Frontend Specialist",
    "Cloud & DevOps Practitioner"
  ],
  bio: "Passionate Senior Full Stack Java Developer with 4+ years of experience engineering high-performance microservices, cloud-native backend architectures, and modern dynamic React user interfaces.",
  location: "Bengaluru, India",
  email: "uttam.modi@example.com",
  githubUrl: "https://github.com/UCodeCrafter",
  linkedinUrl: "https://linkedin.com/in/uttammodi",
  resumeUrl: "#",
  statusText: "Available for Opportunities",
  experienceYears: "4+",
};

const defaultAboutData = {
  greeting: "Hi! I'm Uttam Modi",
  title: "Senior Full Stack Java & React Engineer",
  paragraphs: [
    "I am a results-driven Senior Full Stack Engineer specializing in designing scalable backend microservices with Java 17/21, Spring Boot 3, and event-driven architecture with Apache Kafka, alongside building rich interactive frontend applications in React.js.",
    "Over my 4+ years of industry experience, I have architected high-availability RESTful and gRPC APIs, optimized complex database queries in PostgreSQL/MySQL, containerized deployments with Docker and Kubernetes, and delivered state-of-the-art web apps with modern aesthetic UI designs."
  ],
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies Mastered", value: "25+" },
    { label: "Client Satisfaction", value: "100%" }
  ]
};

const defaultExperienceData = [
  {
    title: "Senior Full Stack Java Developer",
    company: "Enterprise Solutions Tech",
    duration: "2022 - Present",
    description: "Led development of core Spring Boot 3 microservices and event-driven systems with Kafka & Redis. Engineered React.js web portals for real-time telemetry and management dashboards."
  },
  {
    title: "Java Software Engineer",
    company: "Cloud & Systems Corp",
    duration: "2020 - 2022",
    description: "Designed RESTful APIs using Java 17, Spring Data JPA, and PostgreSQL. Reduced query execution time by 40% through index optimization and Redis caching."
  }
];

const defaultProjectsData = [
  {
    title: "Interactive Developer Portfolio & Resume App",
    description: "Modern, glassmorphic React portfolio app featuring 3D tilt interaction, live Firebase synchronization, background particle glow, and automated CI/CD pipeline.",
    tech: ["React.js", "Framer Motion", "Firebase", "Docker", "CSS3"],
    github: "https://github.com/UCodeCrafter/uttam-resume-app",
    link: "https://UCodeCrafter.github.io/uttam-resume-app",
    icon: "🚀"
  },
  {
    title: "Event-Driven E-Commerce Microservices",
    description: "Scalable microservice backend featuring distributed transaction handling (Saga pattern), Apache Kafka event streaming, and Spring Cloud API Gateway.",
    tech: ["Java 21", "Spring Boot 3", "Apache Kafka", "PostgreSQL", "Docker"],
    github: "https://github.com/UCodeCrafter",
    icon: "🛒"
  },
  {
    title: "Real-Time Analytics & Monitoring Dashboard",
    description: "High-throughput dashboard displaying real-time metrics, WebSockets live streaming, and interactive data visualization for server telemetry.",
    tech: ["React.js", "TypeScript", "Spring WebFlux", "Redis", "Chart.js"],
    github: "https://github.com/UCodeCrafter",
    icon: "📊"
  }
];

const defaultEducationData = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    institution: "Technical University",
    year: "2016 - 2020",
    description: "Focused on Data Structures, Algorithms, Software Engineering, Object-Oriented System Design, and Database Management Systems.",
    location: "India",
    cgpa: "8.5 / 10",
    icon: "🎓"
  }
];

const defaultCertificationsData = [
  {
    name: "Oracle Certified Professional: Java SE Developer",
    issuer: "Oracle",
    icon: "📜"
  },
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services (AWS)",
    icon: "☁️"
  }
];

const defaultFooterData = {
  copyrightText: "Uttam Modi. All rights reserved.",
};

const defaultResumeData = {
  personal: defaultPersonalData,
  about: defaultAboutData,
  skills: defaultSkillsData,
  experience: defaultExperienceData,
  projects: defaultProjectsData,
  education: defaultEducationData,
  certifications: defaultCertificationsData,
  footer: defaultFooterData,
};

const ensureArray = (val) => {
  if (!val) return [];
  if (Array.isArray(val)) return val.filter(Boolean);
  if (typeof val === 'object') return Object.values(val).filter(Boolean);
  return [];
};

const normalizeSkills = (skillsData) => {
  const categories = ensureArray(skillsData);
  if (categories.length === 0) return defaultSkillsData;
  return categories.map((cat) => ({
    ...cat,
    skills: ensureArray(cat.skills),
    progressSkills: ensureArray(cat.progressSkills),
  }));
};

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState(defaultResumeData);
  const [dataSource, setDataSource] = useState('loading');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setDataSource('default');
      setLoading(false);
      return;
    }

    setLoading(true);

    const unsubscribe = subscribeToResumeData(
      (data) => {
        if (data) {
          const personal = { ...defaultPersonalData, ...(data.personal || {}) };
          const about = {
            ...defaultAboutData,
            ...(data.about || {}),
            paragraphs: ensureArray(data.about?.paragraphs).length > 0
              ? ensureArray(data.about?.paragraphs)
              : defaultAboutData.paragraphs,
            stats: ensureArray(data.about?.stats).length > 0
              ? ensureArray(data.about?.stats)
              : defaultAboutData.stats,
          };
          const rawSkills = normalizeSkills(data.skills);
          const skills = rawSkills.length > 0 ? rawSkills : defaultSkillsData;
          const experience = ensureArray(data.experience).length > 0 ? ensureArray(data.experience) : defaultExperienceData;
          const projects = ensureArray(data.projects).length > 0 ? ensureArray(data.projects) : defaultProjectsData;
          const education = ensureArray(data.education).length > 0 ? ensureArray(data.education) : defaultEducationData;
          const certifications = ensureArray(data.certifications).length > 0 ? ensureArray(data.certifications) : defaultCertificationsData;
          const footer = { ...defaultFooterData, ...(data.footer || {}) };

          setResumeData({
            personal,
            about,
            skills,
            experience,
            projects,
            education,
            certifications,
            footer,
          });
          setDataSource('firebase');
          setError(null);
        } else {
          setResumeData(defaultResumeData);
          setDataSource('default');
        }
        setLoading(false);
      },
      (err) => {
        console.warn('Could not fetch from Firebase, using default data:', err.message);
        setError(err.message);
        setResumeData(defaultResumeData);
        setDataSource('default');
        setLoading(false);
      }
    );

    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);

  return (
    <ResumeContext.Provider
      value={{
        data: resumeData,
        personal: resumeData.personal || defaultPersonalData,
        about: resumeData.about || defaultAboutData,
        skills: (resumeData.skills && resumeData.skills.length > 0) ? resumeData.skills : defaultSkillsData,
        experience: (resumeData.experience && resumeData.experience.length > 0) ? resumeData.experience : defaultExperienceData,
        projects: (resumeData.projects && resumeData.projects.length > 0) ? resumeData.projects : defaultProjectsData,
        education: (resumeData.education && resumeData.education.length > 0) ? resumeData.education : defaultEducationData,
        certifications: (resumeData.certifications && resumeData.certifications.length > 0) ? resumeData.certifications : defaultCertificationsData,
        footer: resumeData.footer || defaultFooterData,
        dataSource,
        isFirebaseConfigured,
        loading,
        error,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResumeData = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResumeData must be used within a ResumeProvider');
  }
  return context;
};

export default ResumeContext;
