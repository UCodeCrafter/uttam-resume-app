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

const emptyResumeData = {
  personal: {},
  about: {},
  skills: defaultSkillsData,
  experience: [],
  projects: [],
  education: [],
  certifications: [],
  footer: {},
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
  const [resumeData, setResumeData] = useState(emptyResumeData);
  const [dataSource, setDataSource] = useState('loading');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setDataSource('not_configured');
      setLoading(false);
      return;
    }

    setLoading(true);

    const unsubscribe = subscribeToResumeData(
      (data) => {
        if (data) {
          const personal = data.personal || {};
          const about = {
            ...(data.about || {}),
            paragraphs: ensureArray(data.about?.paragraphs),
            stats: ensureArray(data.about?.stats),
          };
          const rawSkills = normalizeSkills(data.skills);
          const skills = rawSkills.length > 0 ? rawSkills : defaultSkillsData;
          const experience = ensureArray(data.experience);
          const projects = ensureArray(data.projects);
          const education = ensureArray(data.education);
          const certifications = ensureArray(data.certifications);
          const footer = data.footer || {};

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
          setResumeData({
            ...emptyResumeData,
            skills: defaultSkillsData
          });
          setDataSource('empty');
        }
        setLoading(false);
      },
      (err) => {
        console.warn('Could not fetch from Firebase:', err.message);
        setError(err.message);
        setDataSource('error');
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
        personal: resumeData.personal || {},
        about: resumeData.about || {},
        skills: (resumeData.skills && resumeData.skills.length > 0) ? resumeData.skills : defaultSkillsData,
        experience: resumeData.experience || [],
        projects: resumeData.projects || [],
        education: resumeData.education || [],
        certifications: resumeData.certifications || [],
        footer: resumeData.footer || {},
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
