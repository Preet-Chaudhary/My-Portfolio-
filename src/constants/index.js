import project1 from "../assets/projects/Project-1.webp";
import project2 from "../assets/projects/Project-2.webp";
import project3 from "../assets/projects/Project-3.webp";
import project4 from "../assets/projects/Project-4.webp";
//import Icons from "./icons";
import { FaReact, FaHtml5, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiSocketdotio } from "react-icons/si";
import { DiPython } from "react-icons/di";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experience.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;



export const PROJECTS = [
  {
    title: "Commercial Gym Website",
    image: project1,
    description:
      "A visually engaging gym website that showcases membership plans and services through smooth animations and interactive design.",
    technologies: ["HTML", "Tailwind", "React", "MongoDB"],
    link:"https://2dayfitness.netlify.app/"
  },
  {
    title: "Ink and Think",
    image: project4,
    description:
   " A real-time multiplayer drawing and guessing game where players join rooms using a code, take turns drawing a word, and others guess it within a time limit.",
    technologies: ["HTML", "Tailwind", "React", "Node","Express","SocketIO"],
    link:"https://inkandthinkbypc.netlify.app/"
  },
  {
    title: "To Do List",
    image: project3,
    description:
      "A visually engaging and interactive to-do list web app built with React, featuring local storage persistence, animated UI, and task management functionalities.",
    technologies: ["HTML", "React", "Tailwind"],
    link:"https://to-do-bypreet.netlify.app/"
  },
  {
    title: "Air Canvas",
    image: project2,
    description:
      "A Python app using OpenCV for real-time color tracking that enables midair sketching and gesture-triggered emoji reactions, boosting user engagement by 60% in beta tests.",
    technologies: ["Python"],
  },
];

export const CONTACT = {
  address: "Thapar Institute of Engineering and Technology, Patiala, Punjab-147001 ",
  phoneNo: "+91 9193526495 ",
  email: "preet.chaudhary224@gmail.com",
};
