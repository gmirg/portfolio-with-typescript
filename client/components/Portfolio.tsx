import React, { useEffect, useState } from "react";
import { getProjects } from "../app/api/getprojects";
import { IProject } from "../app/interfaces/project.interface";
import Image from "next/image";
import styles from "../app/page.module.css";

const Portfolio = () => {
  const data = async () => {
    try {
      const result: IProject[] = await getProjects();
      setProjects(result);
      console.log(projects)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    data();
  }, []);

  const [projects, setProjects] = useState<IProject[]>([]);
  return (
    <div className="container">
      <ul className="posts">
        {projects.map((project) => (
          <li key={project._id}>
            <Image
              className={styles.projectBg}
              src={project.imageUrl}
              alt={project.name}
              height={480}
              width={640}
            />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
