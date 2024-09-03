import project1 from "../assets/projects/project-1.jpg";
import haki from "../assets/projects/haki.png";
import recipes from "../assets/projects/recipes.jpg"

export const ABOUT_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Python, MySQL & PostgreSQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I'm a passionate coder with a love for creating innovative solutions through technology. I'm captivated by the endless possibilities it offers. I specialize in software engineering, and I'm always eager to learn and explore new technologies.

When I'm not coding, you'll find me on the football field or cricket pitch, enjoying the thrill and camaraderie of team sports. I'm an avid gamer, always on the lookout for the next great game to immerse myself in.

Beyond my personal interests, I believe in giving back to the community. I actively participate in charity work, striving to make a positive impact wherever I can. One cause that is particularly close to my heart is rhino conservation. I am dedicated to supporting efforts to protect these magnificent creatures and ensure their survival for future generations.

Thanks for visiting my portfolio! Feel free to explore my projects and get in touch if you'd like to collaborate.`;

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
