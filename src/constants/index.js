import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";

export const HERO_CONTENT = `I'm a passionate Front-end developer with a knack for crafting robust and scalable web applications. With extensive experience in front-end technologies like React and Next.js, I bring a strong focus on creating exceptional user experiences. Additionally, my background in back-end technologies such as Node.js, MySQL, PostgreSQL, and MongoDB allows me to build comprehensive solutions that drive business growth.`;

export const ABOUT_TEXT = `I'm a Front-end developer who's all about creating web apps that are not only efficient but also super user-friendly. My journey into coding started with me just being curious about how stuff works, and now, here I am, loving every bit of it! I've had my hands on a bunch of cool technologies like React, Next.js, and Tailwind CSS for front-end development. Additionally, I have experience with back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB, which helps me build comprehensive solutions.

What gets me going is solving those tricky problems, especially when I'm working with a team. Outside of coding, you'll find me staying active, checking out the latest tech trends, and even lending a hand to open-source projects whenever I can.`;

export const PROJECTS = [
  {
    title: "Weather Forecasting Website",
    image: project1,
    description:
      "A fully functional weather application that shows the exact weather forecast for that particular day and seven days after.",
    technologies: [ "TailwindCSS", "TypeScript", "Node.js"],
    link: "https://weather-app-two-ivory-24.vercel.app/",
  },
  {
    title: "Restaurant Website",
    image: project2,
    description:
      "An application for a restaurant website where you can book on the website and see the most favorite dishes.",
    technologies: [ "TailwindCSS", "React"],
    link: "https://w-food-2.vercel.app/",
  },
];

export const CONTACT = {
  address: "Block A Flat 1, Nationwide Estate Wuye ",
  phoneNo: "+234 815 9786 335",
  email: "adewaleadebayo202@gmail.com",
};
