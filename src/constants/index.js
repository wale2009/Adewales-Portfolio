import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
// import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a passionate full-stack developer with a knack for crafting robust and scalable web applications. With experience in the field, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I'm a full-stack developer who's all about creating web apps that are not only efficient but also super user-friendly. My journey into coding started with me just being curious about how stuff works, and now, here I am, loving every bit of it! I've had my hands on a bunch of cool technologies like React, Next.js, Node.js, and databases like MySQL, PostgreSQL, and MongoDB. What gets me going is solving those tricky problems, especially when I'm working with a team. Outside of coding, you'll find me staying active, checking out the latest tech trends, and even lending a hand to open-source projects whenever I can.`;

export const PROJECTS = [
  {
    title: "Weather Forecasting Website",
    image: project1,
    description:
      "A fully functional weather application that shows the exact weather forecast for that particular day and seven days after.",
    technologies: [ "TailwindCSS", "TypeScript", "Node.js"],
    link: "https://weather-app-two-ivory-24.vercel.app/",
    // add the link of the website so it can be visible when the see ur portfolio page
  },
  {
    title: "Restaurant Website",
    image: project2,
    description:
      "An application for a restaurant website where you can book on the website and see the most favorite dishes.",
    technologies: [ "TailwindCSS", "React"],
    link: "https://w-food-2.vercel.app/",
  },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "CSS", "React", "Bootstrap"],
  // },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "Block A Flat 1, Nationwide Estate Wuye ",
  phoneNo: "+234 815 9786 335",
  email: "adewaleadebayo202@gmail.com",
};
