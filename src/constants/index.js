import project1 from "../assets/projects/project-1.jpg";
import haki from "../assets/projects/haki.png";
import recipes from "../assets/projects/recipes.jpg"

export const ABOUT_CONTENT = `I'm seeking an entry-level software engineering role in a dynamic tech environment where I can leverage my skills in full-stack development to contribute to innovative and impactful projects.`;

export const ABOUT_TEXT = `I'm a Junior Software Engineer with hands-on experience developing scalable full-stack web applications 
using Javascript and Python. I excel at creating responsive, user-friendly solutions while maintaining a strong focus on 
writing clean, maintainable code. Through intensive bootcamp projects and real-world implementations, I've become well-versed in 
Scrum methodology and collaborative development. `;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "Moringa School",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Flask. Implemented RESTful APIs and integrated with Postgres databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Python", "Flask", "Postgres"],
  }
];

export const PROJECTS = [
  {
    title: "Haki",
    image: haki,
    description:
      "Haki aims to connect everyday Kenyans with reliable legal representation. Our platform helps you find customized legal services that match your specific needs.",
    technologies: ["React", "Flask", "Postgres", "Firebase"],
    link: ["https://main--hakiproject.netlify.app/"]
  },
  {
    title: "Recipe Website",
    image: recipes,
    description:
      "A fully functional recipe website with features like search, add to favorites and remove from favorites",
    technologies: ["React", "Redux", "TailwindCss"],
    link: ["https://thunderkitchen.netlify.app/"]
  }
];

export const CONTACT = {
  address: "Ngong Lane Plaza, Ngong RD",
  phoneNo: "+254 705 569 827",
  email: "ianmworia156@gmail.com",
};
