import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opcaity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true}}
        className="my-20 text-center text-4xl"
      >
        Commercial Projects
      </motion.h2>
      {PROJECTS.map((project, index) => (
        <div className="flex flex-wrap lg:justify-center mb-8" key={index}>
          <motion.div 
          whileInView={{opacity: 1, x: 0}}
          initial={{ opacity: 0, x: -100}}
          transition={{duration: 0.5}}
          viewport={{ once: true}}
          className="w-full lg:w-1/4">
            <img
              className="mb-6 rounded"
              src={project.image}
              alt={project.title}
              width={150}
              height={150}
            />
          </motion.div>
          <motion.div
          whileInView={{opacity: 1, x: 0}}
          initial={{ opacity: 0, x: 100}}
          transition={{duration: 1}}
          viewport={{ once: true}}
          className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">{project.title}</h6>
            <p className="mb-4 text-neutral-400 text-justify">
              {project.description}
            </p>
            {project.technologies.map((tech, index) => (
              <span
                className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                key={index}
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
