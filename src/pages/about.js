import { Suspense } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faServer, faGlobe, faDesktop, faDatabase, faBolt, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const metadata = {
    title: 'About | Biraj Rai',
    description: 'Learn more about Biraj Rai, including skills, experience, and projects.',
}

const SkillCard = ({ icon, title, description }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
        <FontAwesomeIcon icon={icon} className="w-12 h-12 text-blue-500 mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
)

const ProjectCard = ({ title, description, link }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-700">
        <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-500 transition-colors text-gray-800 dark:text-gray-200">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <a href={link} className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors">
            Learn more <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4" />
        </a>
    </div>
)

const AnimatedBackground = () => (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950" />
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
            {[...Array(30)].map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-blue-400 dark:bg-blue-500 blur-sm"
                    style={{
                        width: `${Math.random() * 10 + 5}px`,
                        height: `${Math.random() * 10 + 5}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                    }}
                />
            ))}
        </div>
    </div>
)

export default function About() {
    return (
        <>
            <AnimatedBackground />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
                <Suspense fallback={<div>Loading...</div>}>
                    <section className="mb-20 text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
                            About Biraj Rai
                        </h1>
                        <p className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
                            Hello! I'm Biraj Rai, a passionate web developer with a keen interest in creating
                            user-friendly and accessible web applications. With experience in front-end and
                            back-end technologies, I strive to build products that provide seamless user experiences.
                        </p>
                    </section>

                    <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-gray-200">Core Competencies</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <SkillCard
                                icon={faCode}
                                title="Frontend Development"
                                description="Proficient in JavaScript (ES6+), TypeScript, React, and Next.js for building responsive and interactive UIs."
                            />
                            <SkillCard
                                icon={faServer}
                                title="Backend Development"
                                description="Experienced with Node.js and Express for creating robust and scalable server-side applications."
                            />
                            <SkillCard
                                icon={faGlobe}
                                title="API Development"
                                description="Skilled in designing and implementing RESTful APIs and working with GraphQL for efficient data querying."
                            />
                            <SkillCard
                                icon={faDesktop}
                                title="UI/UX Design"
                                description="Proficient in HTML5, CSS3, and Tailwind CSS for creating beautiful and intuitive user interfaces."
                            />
                            <SkillCard
                                icon={faDatabase}
                                title="Database Management"
                                description="Experienced with both SQL and NoSQL databases, ensuring efficient data storage and retrieval."
                            />
                            <SkillCard
                                icon={faBolt}
                                title="Performance Optimization"
                                description="Dedicated to optimizing web applications for speed, accessibility, and SEO best practices."
                            />
                        </div>
                    </section>

                    <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-gray-200">Notable Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ProjectCard
                                title="Task Tracker Pro"
                                description="A responsive web application built using React and Node.js. This project allows users to track their tasks and deadlines in a highly interactive interface."
                                link="#project-a"
                            />
                            <ProjectCard
                                title="BookWorm API"
                                description="A RESTful API for a book catalog application, developed with Express and MongoDB. This API supports CRUD operations and is designed for scalability."
                                link="#project-b"
                            />
                            <ProjectCard
                                title="ShopEase"
                                description="An e-commerce platform featuring product listings, shopping cart functionality, and user authentication, built using Next.js and integrated with a payment gateway."
                                link="#project-c"
                            />
                            <ProjectCard
                                title="DevConnect"
                                description="A social network for developers, allowing them to create profiles, share posts, and get help from other developers. Built with the MERN stack."
                                link="#project-d"
                            />
                        </div>
                    </section>

                    <section className="text-center">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Let's Connect</h2>
                        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                            I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
                        </p>
                        <a
                            href="mailto:biraj@example.com"
                            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                        >
                            Get in Touch
                        </a>
                    </section>
                </Suspense>
            </div>
        </>
    )
}