import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronUp, Video, Cloud, Brain, MessageCircle } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const projects = [
        {
            icon: <MessageCircle  size={28} />,
            title: 'Chatgenius.ai – Infogen-Labs',
            description: 'Chatgenius.ai an AI-powered conversational platform designed to assist users with tasks such as answering questions, generating content, providing intelligent suggestions, and automating communication workflows.',
            strategy: ['Functional Testing', 'Regression Testing', 'Smoke Testing', 'UAT', 'Metadata Validation'],
            tools: ['JIRA', 'Postman', 'BrowserStack', 'Charles Proxy', 'TestRail'],
            challenges: 'While testing Chatgenius.ai, the main challenge is validating AI responses because they are dynamic and may vary each time, making exact result comparison difficult. Other challenges include handling API delays, ensuring proper conversation flow, verifying UI responsiveness, testing different user inputs, checking browser compatibility, and validating error handling and overall system stability.',
            solution: 'To address these challenges, QA engineers validate AI responses based on relevance, correctness, and context instead of exact matching. They use API testing tools like Postman to verify backend responses and ensure proper error handling.UI and cross-browser testing ensures proper functionality across devices and browsers. Additionally, QA performs positive, negative, and exploratory testing to verify conversation flow, handle different user inputs, and ensure the application works reliably in all scenarios.',
            results: '95% bug detection rate before production; 40% reduction in post-release critical bugs; improved release confidence with structured sign-off process.',
            // github: '#',
            // docs: '#',
            color: '#0eee42'
        },
        {
            icon: <Brain  size={28} />,
            title: 'Runday.ai – Ciklum',
            description: 'Runday.ai is an AI-powered meeting creation and chatbot generation application that allows users to create a chatbot with a single click by providing their company website URL. The AI automatically scrapes data from the provided website and creates a chatbot that can interact with users by answering questions based on the website content. Additionally, the chatbot can schedule meetings automatically based on user availability, helping streamline communication and meeting management.',
            strategy: ['API Testing', 'Functioanl Testing', 'UI Testing','Debugging', 'Metadata Validation', 'Chatbot Response Validation', 'UAT'],
            tools: ['Postman','JIRA', 'Git', 'AWS','Cloudflare'],
            challenges: 'While testing Runday.ai, the main challenges include validating the accuracy of AI-scraped data and chatbot responses, as outputs may vary depending on website content. Other challenges include verifying correct chatbot creation from the URL, ensuring proper meeting scheduling based on availability, handling API delays, validating conversation flow, testing different user inputs, and ensuring UI responsiveness, cross-browser compatibility, and overall system stability.',
            solution: 'To overcome these challenges, QA engineers validate chatbot responses based on accuracy and relevance to the website content. They verify the data scraping functionality using different URLs and ensure correct chatbot creation. Meeting scheduling workflows are tested to confirm meetings are created based on availability. Additionally, QA performs API testing, UI testing, cross-browser testing, and positive and negative testing to ensure proper functionality, performance, and system reliability.',
            results: 'Using this solution ensures accurate chatbot responses, correct data scraping, reliable meeting scheduling, proper workflow execution, stable performance, and a consistent user experience across different inputs, devices, and browsers.',
            // github: '#',
            // docs: '#',
            color: '#8b5cf6'
        },
        {
            icon: <Cloud  size={28} />,
            title: 'Keysight (Salesforce) – Moolya Software Testing',
            description: 'Tested Salesforce Sales and Service Cloud to validate end-to-end workflows, including standard and custom objects, fields, and layouts. Executed functional, regression, and integration tests across sandboxes. Verified validation rules, workflows, and approvals. Performed data validation using reports and Data Loader, tested roles and permissions, logged defects in Jira, and supported UAT and post-deployment validation.',
            strategy: ['Salesforce testing', 'Role based testing', 'Channel based testing', 'AI testing'],
            tools: ['Salesforce', 'Slaesforce Console', 'Salesfore Test3 and Test4'],
            challenges: 'Salesforce testing is challenging due to complex automations like Flows, triggers, and integrations where small changes impact multiple processes. Managing test data and validating role-based access also adds complexity.',
            solution: 'Perform detailed impact analysis for configuration changes and test all related case workflows. Prepare proper test data for different profiles, product families, and accounts to validate role-based behavior and integrations.',
            results: 'Improved test coverage and early detection of issues in case workflows. Ensured correct behavior across profiles, product families, and accounts, leading to fewer defects and more stable Salesforce functionality.',
            // github: '#',
            // docs: '#',
            color: '#12def0'
        },
        {
            icon: <Video size={28} />,
            title: 'Frammer.ai,  AI solution implemented for the Media domain - Moolya Software Testing',
            description: 'Frammer AI is a media platform that enables users to create, edit, and publish short videos directly to social media platforms like Facebook, Instagram, LinkedIn, and YouTube, with features like LiveCut and overlay video editing.',
            strategy: ['Regression Testing', 'Smoke Testing', 'Exploratory Testing', 'Functional Testing', 'UAT Testing', 'UIUX Teting', 'Mobile app Testing', 'Metadata Validation', 'AI Response Validation'],
            tools: ['Assana', 'Postman', 'Andriod Studio', 'Git', 'BrowserStack'],
            challenges: 'Testing AI-generated video outputs and real-time features like LiveCut was challenging due to dynamic content. Ensuring accurate video publishing, metadata mapping, and overlay editing across multiple social media platforms also required thorough validation.',
            solution: 'Addressed challenges by defining clear validation scenarios for AI outputs, performing end-to-end testing for social media publishing, validating LiveCut with multiple data sources, and ensuring correct metadata mapping across the platform.',
            results: 'Improved AI video accuracy, ensured smooth publishing across social media platforms, validated LiveCut real-time news streaming, and maintained correct metadata mapping, resulting in a stable and reliable media platform.',
            // github: '#',
            // docs: '#',
            color: '#10b981'
        },
    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    QA Case Studies
                </motion.h2>
                <motion.p
                    className="projects-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Real-world testing scenarios, challenges solved, and measurable quality improvements
                </motion.p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            className="project-card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            style={{ '--project-color': project.color }}
                        >
                            <div className="project-header">
                                <div className="project-icon" style={{ color: project.color }}>
                                    {project.icon}
                                </div>
                                {/* <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                                        <Github size={18} />
                                    </a>
                                    <a href={project.docs} target="_blank" rel="noopener noreferrer" aria-label="Documentation" title="Docs">
                                        <ExternalLink size={18} />
                                    </a>
                                </div> */}
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-strategy">
                                {project.strategy.map((s, i) => (
                                    <span key={i} className="strategy-tag">{s}</span>
                                ))}
                            </div>

                            <div className="project-tools">
                                {project.tools.map((tool, i) => (
                                    <span key={i} className="tool-tag">{tool}</span>
                                ))}
                            </div>

                            <button
                                className="expand-btn"
                                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                aria-expanded={expandedIndex === index}
                            >
                                {expandedIndex === index ? (
                                    <><ChevronUp size={16} /> Hide Details</>
                                ) : (
                                    <><ChevronDown size={16} /> View Details</>
                                )}
                            </button>

                            {expandedIndex === index && (
                                <motion.div
                                    className="project-details"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="detail-block">
                                        <h4>🔍 Challenge</h4>
                                        <p>{project.challenges}</p>
                                    </div>
                                    <div className="detail-block">
                                        <h4>💡 Solution</h4>
                                        <p>{project.solution}</p>
                                    </div>
                                    <div className="detail-block">
                                        <h4>📈 Results</h4>
                                        <p>{project.results}</p>
                                    </div>
                                </motion.div>
                            )}

                            <div className="project-glow" style={{ background: project.color }}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
