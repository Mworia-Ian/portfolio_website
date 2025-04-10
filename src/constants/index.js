// import project1 from "../assets/projects/project-1.jpg";
// import haki from "../assets/projects/haki.png";
// import recipes from "../assets/projects/recipes.jpg";
import bank from "../assets/projects/banking.jpg";
import ecommerce from "../assets/projects/secommerce.png";

export const ABOUT_CONTENT = `When I'm not writing code as a Kenya-based software engineer, you'll find me kicking balls, swinging bats, or conquering mountains—because apparently juggling multiple sports wasn't challenging enough, I had to add semicolons to the mix too.`;

export const ABOUT_TEXT = `Hi there, `;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "Moringa School",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Flask. Implemented RESTful APIs and integrated with Postgres databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Python", "Flask", "Postgres"],
  },
];

export const PROJECTS = [
  {
    title: "Spear Africa Ecommerce",
    image: ecommerce,
    description:
      "Built with Next.js, the Spear Ecommerce platform is a real-world Ecommerce website used by a Nairobi-based business to conduct their online sales and make ",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCss",
      "Prisma",
      "Uploadthing",
      "ShadCN",
    ],
    link: ["https://spearafrica.vercel.app/"],
  },
  {
    title: "Web Banking App",
    image: bank,
    description:
      "Built with Next.js, Horizon is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCss",
      "Plaid",
      "Dwolla",
      "Appwrite",
      "ShadCN",
    ],
    link: ["https://github.com/Mworia-Ian/web-banking-app"],
  },
  // {
  //   title: "Haki",
  //   image: haki,
  //   description:
  //     "Haki aims to connect everyday Kenyans with reliable legal representation. Our platform helps you find customized legal services that match your specific needs.",
  //   technologies: ["React", "Flask", "Postgres", "Firebase"],
  //   link: ["https://main--hakiproject.netlify.app/"],
  // },
];

export const CONTACT = {
  phoneNo: "+254 705 569 827",
  email: "ianmworia156@gmail.com",
};
