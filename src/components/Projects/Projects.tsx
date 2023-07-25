import "./Projects.css";

type Project = {
  name: string;
  link: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      name: "Compiler for PHP-like language in C",
      link: "https://github.com/JosefKuchar/ifj-project",
    },
    {
      name: "Traffic signs classificator",
      link: "https://github.com/S1ro1/Traffic-signs-classificator",
    },
    {
      name: "Multithreaded TCP server calculating polish notation",
      link: "https://github.com/S1ro1/TCPPolishNotationCalculator",
    },
    {
      name: "Neural network to predict optical flow from video",
      link: "https://github.com/S1ro1/KNN-optical-flow",
    },
    {
      name: "Ant colony optimization for traveling salesman problem",
      link: "https://github.com/S1ro1/ACOTSP",
    },
    {
      name: "Pacman game in C++ and QT",
      link: "https://github.com/JosefKuchar/icp-project",
    },
    {
      name: "Many other unfinished projects :)",
      link: "https://github.com/S1ro1?tab=repositories",
    },
  ];

  return (
    <div>
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li key={index} className="project-link">
            <a href={project.link}>{project.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
