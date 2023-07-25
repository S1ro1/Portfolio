import "./Skills.css";

type SkillsProps = {
  name: string;
  level: number;
};

const renderSkillDots = (level: number) => {
  const maxLevel = 5;
  const dots = [];

  for (let i = 0; i < maxLevel; i++) {
    if (i < level) {
      dots.push(<span key={i} className="dot-full"></span>);
    } else {
      dots.push(<span key={i} className="dot-empty"></span>);
    }
  }

  return dots;
};

const Skills = () => {
  const skills: SkillsProps[] = [
    { name: "Python", level: 5 },
    { name: "Artificial Intelligence", level: 4 },
    { name: "Data Science", level: 4 },
    { name: "Rust", level: 3 },
    { name: "C++", level: 3 },
  ];

  return (
    <div>
      <ul className="skills-list">
        {skills.map((skill) => {
          return (
            <li key={skill.name}>
              {skill.name} {renderSkillDots(skill.level)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
