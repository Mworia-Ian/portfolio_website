import ecommerce from "../assets/projects/secommerce.png";
import sub from "../assets/projects/subscription.jpg";
import langgraph from "../assets/projects/langraphagent.jpg";
export const ABOUT_CONTENT = `I am a Nairobi-based software engineer with a passion for building scalable and user-friendly applications. I have experience in full-stack development using Langchain, React.js and Next.js I am always looking for new challenges to take on.  Including the website that you areon right now, I have built various projects to help bring business around Nairobi online. I've also built Chatbots and MCP servers for businesses to help them supercharge their business with AI.`;

export const ABOUT_TEXT = `Hi there, `;

export const EXPERIENCES = [
  {
    year: "2025-Present",
    role: "AI Researcher",
    company: "SokoHela Limited",
    description: `I am currently working as an AI researcher at SokoHela Limited where I am working on developing AI models for various applications.`,
    technologies: [
      "Langchain",
      "Python",
      "Postgres",
      "Next.js",
      "Ollama",
      "OpenAI",
      "HuggingFace",
    ],
  },
];

export const PROJECTS = [
  {
    title: "LangGraph Document Analysis Agent",
    image: langgraph,
    description:
      "I developed a sophisticated document analysis system that brings AI-powered intelligence to document processing. This project showcases my expertise in building production-ready AI applications with a focus on scalability and user experience",
    technologies: ["Python", "LangGraph", "Flask", "GCP", "DeepSeek"],
    link: ["https://github.com/Mworia-Ian/langgraph-agent"],
  },
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
    title: "Subscription Tracker",
    image: sub,
    description:
      "This is a subscription tracking API built using NodeJs. Complete with email reminder and date tracking you willbe abletokeep track of all of the users subscriptions regardless of the status.",
    technologies: ["Node.js", "Express", "MongoDB"],
    link: ["https://github.com/Mworia-Ian/subscription-tracker"],
  },
];

export const CONTACT = {
  phoneNo: "+254 705 569 827",
  email: "ianmworia156@gmail.com",
};
