import { ProjectStyle } from "./Project.styled";
import Head from "next/head";

const Project = () => {
  const works = [
    {
      name: "JavaScript Drumkit",
      description:
        "My first JavaScript project,a simple musical drumkit app which plays sounds on keystroke   ",
      takeaway: "Got an understanding of working of JavaScript",
      builtWith: "Vanilla JavaScript",
      imageUrl: "/JavScript Logo.svg",
      repoUrl: "",
    },
    {
      name: "Receipe Search App",
      description: "Fetches data from an API and renders in to the screen",
      takeaway: "Implementation of third Party API",
      builtWith: "ReactJS",
      imageUrl: "/ReactLogo.svg",
      repoUrl: "",
    },
    {
      name: "Crown Clothing",
      description:
        "A shopping App, built with ReactJs with Redux and Best practices of React",
      takeaway:
        "Design Patterns and Best practices to follow in React and also got a deep understanding of React Workflow",
      builtWith: "ReactJs",
      imageUrl: "/ReactLogo.svg",
      repoUrl: "",
    },
    {
      name: "CrispInfo",
      description:
        "My personal blog project where I post content which is simple to understand and provides an overview of a topic",
      takeaway:
        "Implementing Backend with several custom API's and knowledge of ExpressJS, NodeJS & MongoDB",
      builtWith: "MongoDB, React, Express, NodeJS",
      imageUrl: "/NodeJs.svg",
      repoUrl: "",
    },
  ];
  return (
    <ProjectStyle>
      <Head>
        <title>Projects | MohanSingh</title>
      </Head>
      <div className="projects__container">
        {works.map(({ name, description, imageUrl }, key) => {
          return (
            <div key={key} className="project__cards">
              <div className="project__image">
                <img src={`${imageUrl}`} />
              </div>
              <div className="details">
                <h3 className="project__name">{name}</h3>
                <h3 className="project__description">{description}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </ProjectStyle>
  );
};

export default Project;
