import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ProjectCard = ({ project, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="bg-gradient-to-br from-dark-lighter to-dark-darker rounded-2xl overflow-hidden shadow-xl border border-primary/10 hover:border-primary/30 transition-all group"
    >
      <div className="bg-gradient-full p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-white/90 text-sm">{project.type}</p>
      </div>

      <div className="p-6 space-y-4">
        <p className="text-gray-light dark:text-gray-light leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-primary/10 text-primary-light border border-primary/30 px-3 py-1 rounded-lg text-xs font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          <a
            href={project.demoLink}
            className="flex-1 text-center bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            View Demo
          </a>
          <a
            href={project.githubLink}
            className="flex-1 text-center bg-primary/10 hover:bg-primary border-2 border-primary text-primary hover:text-white font-semibold py-3 px-4 rounded-lg transition-all"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'Solar Installation Management System',
      type: 'Full-Stack Enterprise SaaS',
      description:
        'Comprehensive enterprise application for solar installation companies featuring automated weekly invoice generation, GPS-based technician tracking, multi-location inventory management, and an innovative solar optimizer with Google Maps integration for roof measurements and optimal panel placement calculations. Reduces administrative time by 70% and saves 10+ hours weekly.',
      techStack: ['Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS S3', 'Google Maps API', 'OAuth2'],
      demoLink: '#',
      githubLink: 'https://github.com/tungatadube/solar-management-system',
    },
    {
      title: 'Payment Processing System',
      type: 'FinTech Application',
      description:
        'Real-time payment processing simulator with fraud detection, webhook notifications, and comprehensive audit logging. Features idempotency and circuit breakers.',
      techStack: ['Spring Boot', 'WebSocket', 'PostgreSQL', 'React'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'DevOps Automation Toolkit',
      type: 'Infrastructure & Tools',
      description:
        'Collection of reusable Terraform modules, Kubernetes manifests, CI/CD templates, and monitoring configurations for rapid infrastructure deployment.',
      techStack: ['Terraform', 'Kubernetes', 'Helm', 'Prometheus'],
      demoLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-dark-darker dark:bg-dark-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white dark:text-white">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-full mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} delay={0.2 + index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
