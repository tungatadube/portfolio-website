import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const TimelineItem = ({ experience, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.6, delay }}
      className="relative pl-8 md:pl-12 pb-12"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg shadow-primary/50" />

      {/* Content card */}
      <div className="bg-gradient-to-br from-dark-lighter to-dark-darker rounded-xl p-6 shadow-xl border border-primary/10 hover:border-primary/30 transition-all group">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white dark:text-white mb-2">
              {experience.title}
            </h3>
            <p className="text-gray-light/70 text-lg">{experience.company}</p>
          </div>
          <span className="text-primary font-semibold mt-2 md:mt-0">{experience.date}</span>
        </div>

        <p className="text-gray-light dark:text-gray-light mb-4 leading-relaxed">
          {experience.description}
        </p>

        <ul className="space-y-3">
          {experience.achievements.map((achievement, index) => (
            <li key={index} className="flex items-start text-gray-light dark:text-gray-light">
              <span className="text-primary font-bold mr-3 flex-shrink-0">✓</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Ecocash Holdings',
      date: 'Jan 2020 - Sep 2025',
      description:
        'Led backend engineering initiatives for enterprise fintech platform processing $2B+ in annual transactions across multiple African markets.',
      achievements: [
        'Architected and deployed 40+ microservices using Spring Boot and Kubernetes, improving system scalability and reducing deployment time by 79%',
        'Implemented CI/CD pipelines enabling zero-downtime deployments with daily production releases',
        'Maintained 99.9% uptime for payment processing systems handling 500,000+ daily transactions',
        'Led international expansion projects in Liberia and Ghana, managing deployment and system integration',
        'Mentored 5 junior developers and conducted 200+ code reviews, increasing test coverage from 45% to 82%',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Cassava Technologies',
      date: 'Feb 2019 - Dec 2020',
      description:
        'Contributed to fintech platform development serving 3 African markets with focus on system reliability and microservices migration.',
      achievements: [
        'Developed RESTful APIs using Spring Boot for mobile money transactions, processing 200,000+ daily transactions',
        'Migrated 5 legacy systems to containerized microservices architecture without service interruptions',
        'Implemented automated CI/CD pipelines, enabling 2-3 production deployments per week',
        'Participated in international expansion projects across Zimbabwe, Zambia, and Lesotho',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-dark-lighter dark:bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white dark:text-white">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-full mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-2 top-0 bottom-12 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.company}
              experience={experience}
              delay={0.2 + index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
