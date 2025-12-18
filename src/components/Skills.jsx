import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SkillTag = ({ skill, delay }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all cursor-default"
    >
      {skill}
    </motion.span>
  );
};

const SkillCategory = ({ title, skills, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="space-y-4"
    >
      <h3 className="text-xl font-bold text-white dark:text-white">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <SkillTag key={skill} skill={skill} delay={delay + index * 0.05} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: 'Backend Development',
      skills: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'REST APIs', 'Microservices'],
    },
    {
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Material-UI', 'Google Maps API'],
    },
    {
      title: 'DevOps & Cloud',
      skills: ['Docker', 'Kubernetes', 'AWS', 'AWS S3', 'AWS RDS', 'Jenkins', 'GitLab CI/CD', 'GitHub Actions'],
    },
    {
      title: 'Databases & Messaging',
      skills: ['PostgreSQL', 'MySQL', 'Redis', 'RabbitMQ', 'Apache Kafka'],
    },
    {
      title: 'Tools & Practices',
      skills: ['Git', 'Maven', 'JUnit', 'Agile/Scrum', 'TDD', 'Linux'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-dark-darker dark:bg-dark-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white dark:text-white">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-full mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="bg-gradient-to-br from-dark-lighter to-dark-darker rounded-2xl p-8 md:p-12 shadow-2xl border border-primary/10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={category.title}
                title={category.title}
                skills={category.skills}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
