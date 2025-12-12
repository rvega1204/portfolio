"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Cloud, Database, GitBranch, Award, Briefcase, GraduationCap } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    languages: ['Java', 'JavaScript', 'Python', 'Go', 'HTML5', 'CSS3'],
    frameworks: ['Spring Boot', 'React', 'Node.js', 'NextJS', 'AngularJS', 'jQuery', 'Bootstrap'],
    cloud: ['AWS (SNS, Lambda, S3)', 'Terraform', 'Kubernetes', 'Docker', 'Airflow', 'Jenkins'],
    databases: ['MySQL', 'PostgreSQL', 'Oracle', 'MongoDB'],
    tools: ['Git', 'Kafka', 'Splunk', 'New Relic', 'Selenium', 'JUnit', 'Mockito', 'n8n']
  };

  const experience = [
    {
      company: 'Confiz',
      role: 'Software Engineer',
      period: 'May 2025 - Nov 2025',
      location: 'San Jose, Costa Rica',
      highlights: [
        'Developing Java microservices with comprehensive unit testing and Kubernetes deployment',
        'Managing AWS infrastructure (SNS, Lambda, S3) using Terraform for infrastructure as code',
        'Orchestrating data workflows with Apache Airflow and Python scripting',
        'Leading GitHub migration initiatives to improve version control workflows'
      ]
    },
    {
      company: 'Publicis',
      role: 'Software Engineer',
      period: 'January 2025 - May 2025',
      location: 'San Jose, Costa Rica',
      highlights: [
        'Developed backend solutions using Java and Spring Boot for enterprise applications',
        'Designed and implemented scalable RESTful APIs'
      ]
    },
    {
      company: 'Appvance',
      role: 'Software Engineer',
      period: 'August 2016 - October 2024',
      location: 'San Jose, Costa Rica',
      highlights: [
        'Spearheaded full-stack web development using HTML5, CSS3, Bootstrap, JavaScript, and jQuery',
        'Developed robust server-side Java applications focusing on scalable and secure code',
        'Deployed AWS applications leveraging cloud technologies for improved performance',
        'Conducted comprehensive smoke testing, achieving 30% reduction in production bugs',
        'Integrated advanced cybersecurity practices to mitigate risks and safeguard user data'
      ]
    },
    {
      company: 'Mobilize',
      role: 'Software Engineer',
      period: 'May 2016 - August 2016',
      location: 'San Jose, Costa Rica',
      highlights: [
        'Led software migration initiative transitioning legacy systems to modern architectures'
      ]
    },
    {
      company: 'Prodigious',
      role: 'Front-End Engineer',
      period: 'June 2012 - March 2016',
      location: 'Belen, Costa Rica',
      highlights: [
        'Engineered interactive websites using JavaScript, jQuery, AEM CQ5, AngularJS, Sass, and Less',
        'Designed secure login and form pages with user authentication and data validation'
      ]
    }
  ];

  const education = [
    { institution: 'TEC, San Pedro', degree: 'Cybersecurity Specialist', year: '2019' },
    { institution: 'Cenfotec, San Pedro', degree: 'Web Development Certificate', year: '2012' },
    { institution: 'UTC, San Jose', degree: "Bachelor's in Systems Engineering", year: '2010' }
  ];

  const certifications = [
    { category: 'AI & Automation', items: ['n8n Workflow Automation & AI (2025)', 'PyTorch (2021)'] },
    { category: 'Cloud & DevOps', items: ['Azure DevOps (2024)', 'Docker & Kubernetes (2021)', 'Data Engineer Bootcamp (2025)', 'Apache Airflow 3 (2025)', 'Terraform (2025)'] },
    { category: 'Backend', items: ['Spring Boot 3 (2025)', 'Java Design Patterns (2025)', 'SOLID Principles (2025)', 'Unit Testing with Mockito (2025)', 'Go Master (2024)'] },
    { category: 'Frontend & Testing', items: ['NextJS (2025)', 'AEM Developer (2025)', 'Selenium WebDriver (2024)', 'React & NodeJS (2024)', 'React MERN (2021)'] },
    { category: 'Other', items: ['Application Security (2022)', 'Scrum Product Owner Certiprof (2023)'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 font-sans">
      {/* Animated background grid */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center px-4 md:px-6 overflow-hidden">
        <div className={`max-w-7xl w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side - Text */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
                  <span className="text-cyan-400 text-xs md:text-sm font-medium tracking-wider">SOFTWARE ENGINEER</span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                    Ricardo
                  </span>
                  <span className="block text-slate-100">Vega Garrido</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-xl">
                  13+ years building scalable microservices, cloud infrastructure, and DevOps solutions
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-3 md:gap-4 text-slate-400 text-sm md:text-base">
                <a href="mailto:vegagarrido@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                  <Mail size={16} className="md:w-[18px] md:h-[18px]" />
                  <span className="text-xs md:text-sm">vegagarrido@gmail.com</span>
                </a>
                <a href="tel:+50683109285" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                  <Phone size={16} className="md:w-[18px] md:h-[18px]" />
                  <span className="text-xs md:text-sm">(506) 8310 9285</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="md:w-[18px] md:h-[18px]" />
                  <span className="text-xs md:text-sm">San Jose, Costa Rica</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a 
                  href="https://github.com/rvega1204" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 px-5 md:px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300"
                >
                  <Github className="group-hover:text-cyan-400 transition-colors" size={18} />
                  <span className="font-medium text-sm md:text-base">GitHub</span>
                  <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ricardo-vega-garrido-02ab1a4a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 px-5 md:px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300"
                >
                  <Linkedin className="group-hover:text-blue-400 transition-colors" size={18} />
                  <span className="font-medium text-sm md:text-base">LinkedIn</span>
                  <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Right side - Stats Cards */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-4 md:p-6 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-black text-cyan-400 mb-2">13+</div>
                <div className="text-slate-400 text-xs md:text-sm">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-4 md:p-6 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-black text-purple-400 mb-2">5</div>
                <div className="text-slate-400 text-xs md:text-sm">Companies</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-4 md:p-6 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-black text-green-400 mb-2">20+</div>
                <div className="text-slate-400 text-xs md:text-sm">Technologies</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-4 md:p-6 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-black text-orange-400 mb-2">15+</div>
                <div className="text-slate-400 text-xs md:text-sm">Certifications</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-cyan-400 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-start md:justify-center gap-2 overflow-x-auto scrollbar-hide">
            {['about', 'skills', 'experience', 'education', 'certifications'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 md:px-6 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  activeSection === section
                    ? 'bg-cyan-500 text-slate-950'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        {/* About Section */}
        {activeSection === 'about' && (
          <section className="space-y-12 animate-[fadeIn_0.5s_ease-in]">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Professional Summary
              </h2>
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
                <p className="text-xl text-slate-300 leading-relaxed">
                  Software Engineer with 13+ years of experience specializing in <span className="text-cyan-400 font-semibold">Java microservices</span>, 
                  <span className="text-blue-400 font-semibold"> DevOps practices</span>, and <span className="text-purple-400 font-semibold">cloud infrastructure</span>. 
                  Proven expertise in AWS, Kubernetes, and building scalable applications across multiple industries.
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <Code className="text-cyan-400 mb-4" size={32} />
                <h3 className="text-lg font-bold mb-2">Full-Stack Development</h3>
                <p className="text-slate-400 text-sm">Expert in modern web technologies and enterprise application development</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                <Cloud className="text-blue-400 mb-4" size={32} />
                <h3 className="text-lg font-bold mb-2">Cloud & DevOps</h3>
                <p className="text-slate-400 text-sm">Specialized in AWS infrastructure, Kubernetes, and CI/CD pipelines</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                <Database className="text-purple-400 mb-4" size={32} />
                <h3 className="text-lg font-bold mb-2">Data Engineering</h3>
                <p className="text-slate-400 text-sm">Experience with multiple database systems and data workflow orchestration</p>
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section className="space-y-12 animate-[fadeIn_0.5s_ease-in]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Technical Skills
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Code className="text-cyan-400" size={24} />
                    <h3 className="text-2xl font-bold">Languages</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-400 text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <GitBranch className="text-purple-400" size={24} />
                    <h3 className="text-2xl font-bold">Frameworks</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-400 text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="text-green-400" size={24} />
                    <h3 className="text-2xl font-bold">Databases</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.databases.map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Cloud className="text-blue-400" size={24} />
                    <h3 className="text-2xl font-bold">Cloud & DevOps</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.cloud.map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="text-orange-400" size={24} />
                    <h3 className="text-2xl font-bold">Tools & Others</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-lg text-orange-400 text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <section className="space-y-12 animate-[fadeIn_0.5s_ease-in]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Work Experience
            </h2>
            
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-400 mb-1">{job.role}</h3>
                      <div className="text-xl font-semibold text-slate-100">{job.company}</div>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <div className="text-slate-400 font-medium">{job.period}</div>
                      <div className="text-slate-500 text-sm">{job.location}</div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-slate-300">
                        <span className="text-cyan-400 mt-1.5 flex-shrink-0">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <section className="space-y-12 animate-[fadeIn_0.5s_ease-in]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Education
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                  <GraduationCap className="text-cyan-400 mb-4" size={32} />
                  <div className="text-sm text-slate-500 mb-2">{edu.year}</div>
                  <h3 className="text-lg font-bold text-slate-100 mb-2">{edu.degree}</h3>
                  <div className="text-slate-400">{edu.institution}</div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-purple-400" size={28} />
                <h3 className="text-2xl font-bold">Languages</h3>
              </div>
              <div className="flex gap-8 text-lg">
                <div>
                  <span className="text-slate-400">Spanish:</span>
                  <span className="text-slate-100 font-semibold ml-2">Native</span>
                </div>
                <div>
                  <span className="text-slate-400">English:</span>
                  <span className="text-slate-100 font-semibold ml-2">B2 Level (BELT Certified)</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Certifications Section */}
        {activeSection === 'certifications' && (
          <section className="space-y-12 animate-[fadeIn_0.5s_ease-in]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Professional Development
            </h2>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">{cert.category}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {cert.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-300">
                        <Award className="text-blue-400 flex-shrink-0" size={16} />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="relative border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <div className="flex justify-center gap-6">
            <a href="https://github.com/rvega1204" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ricardo-vega-garrido-02ab1a4a/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:vegagarrido@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-slate-500 text-sm">
            © 2025 Ricardo Vega Garrido. Built with React.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
}