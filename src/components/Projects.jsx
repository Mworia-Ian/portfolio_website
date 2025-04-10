// import { PROJECTS } from "../constants";
// import { motion } from "framer-motion";

// const Projects = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4">
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 1.5 }}
//         className="my-20 text-center text-4xl"
//       >
//         Projects
//       </motion.h2>
//       {PROJECTS.map((project, index) => (
//         <a
//           key={index}
//           href={project.link[0]}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <div className="mb-8 flex flex-wrap lg:justify-center">
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -100 }}
//               transition={{ duration: 1.5 }}
//               className="w-full lg:w-1/4"
//             >
//               <img
//                 src={project.image}
//                 width={150}
//                 height={150}
//                 alt={project.title}
//                 className="mb-6 rounded-xl"
//               />
//             </motion.div>
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: 100 }}
//               transition={{ duration: 1.5 }}
//               className="w-full max-w-xl lg:w-3/4"
//             >
//               <h6 className="mb-2 font-semibold">{project.title}</h6>
//               <p className="mb-4 text-neutral-400">{project.description}</p>
//               {project.technologies.map((tech, techIndex) => (
//                 <span
//                   key={techIndex}
//                   className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </motion.div>
//           </div>
//         </a>
//       ))}
//     </div>
//   );
// };

// export default Projects;
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group"
          >
            <a
              href={project.link[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-neutral-400">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-800 to-purple-900 text-white transform transition-transform hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex justify-end">
                  <motion.span
                    className="text-purple-400 flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    View Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.span>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
